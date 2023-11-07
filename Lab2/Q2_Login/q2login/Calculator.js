import { View, Text, Button } from "react-native";
import styles from './CalcInterfaceStyle';

const CalculatorInterface = () => {
    return(
        <View>
            <Text>0</Text>
            <Button title="0" styles={styles.numberButton}/>
            <Button title="1" styles={styles.numberButton}/>
            <Button title="2" styles={styles.numberButton}/>
            <Button title="3" styles={styles.numberButton}/>
            <Button title="4" styles={styles.numberButton}/>
            <Button title="5" styles={styles.numberButton}/>
            <Button title="6" styles={styles.numberButton}/>
            <Button title="7" styles={styles.numberButton}/>
            <Button title="8" styles={styles.numberButton}/>
            <Button title="9" styles={styles.numberButton}/>
            <Button title="÷" styles={styles.operationButton}/>
            <Button title="x" styles={styles.operationButton}/>
            <Button title="-" styles={styles.operationButton}/>
            <Button title="+" styles={styles.operationButton}/>
            <Button title="=" styles={styles.operationButton}/>
        </View>
    );
};

export default CalculatorInterface;