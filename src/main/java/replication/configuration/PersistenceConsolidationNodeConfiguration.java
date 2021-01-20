package replication.configuration;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

import javax.sql.DataSource;
import java.util.HashMap;

@Configuration
@PropertySource({ "classpath:persistence-multiple-db.properties" })
@EnableJpaRepositories(
        basePackages = "replication.repository",
        entityManagerFactoryRef = "consolidationNodeEntityManager",
        transactionManagerRef = "consolidationNodeTransactionManager"
)
public class PersistenceConsolidationNodeConfiguration {

    @Autowired
    private Environment env;

    @Bean
    public DataSource consolidationNodeDataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(env.getProperty("jdbc.driverClassName"));
        dataSource.setUrl(env.getProperty("consolidation.jdbc.url"));
        dataSource.setUsername(env.getProperty("consolidation.jdbc.user"));
        dataSource.setPassword(env.getProperty("consolidation.jdbc.pass"));
        return dataSource;
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean consolidationNodeEntityManager(DataSource consolidationNodeDataSource) {
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(consolidationNodeDataSource);
        em.setPackagesToScan(new String[] { "replication.model" });
        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        em.setJpaVendorAdapter(vendorAdapter);
        final HashMap<String, Object> properties = new HashMap<String, Object>();
        properties.put("hibernate.hbm2ddl.auto", env.getProperty("hibernate.hbm2ddl.auto"));
        properties.put("hibernate.dialect", env.getProperty("hibernate.dialect"));
        em.setJpaPropertyMap(properties);
        return em;
    }

    @Bean
    public PlatformTransactionManager consolidationNodeTransactionManager(LocalContainerEntityManagerFactoryBean consolidationNodeEntityManager) {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(consolidationNodeEntityManager.getObject());
        return transactionManager;
    }
}
