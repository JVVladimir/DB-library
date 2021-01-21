package replication.configuration;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import javax.sql.DataSource;


@Configuration
@PropertySource({ "classpath:persistence-multiple-db.properties" })
@EnableJpaRepositories(
        basePackages = "replication.repository.consolidation",
        entityManagerFactoryRef = "consolidationNodeEntityManager",
        transactionManagerRef = "consolidationNodeTransactionManager"
)
public class PersistenceConsolidationNodeConfiguration {


    @Bean
    @ConfigurationProperties(prefix="consolidation")
    public DataSource consolidationNodeDataSource() {
        return DataSourceBuilder.create().build();
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean consolidationNodeEntityManager(DataSource consolidationNodeDataSource) {
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(consolidationNodeDataSource);
        em.setPackagesToScan("replication.model.consolidation");
        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        em.setJpaVendorAdapter(vendorAdapter);
        return em;
    }

    @Bean
    public PlatformTransactionManager consolidationNodeTransactionManager(@Qualifier("consolidationNodeEntityManager") LocalContainerEntityManagerFactoryBean consolidationNodeEntityManager) {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(consolidationNodeEntityManager.getObject());
        return transactionManager;
    }
}
