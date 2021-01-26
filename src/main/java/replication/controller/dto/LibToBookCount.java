package replication.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class LibToBookCount {
    long blIdLibrary;
    long blIdBook;
}
