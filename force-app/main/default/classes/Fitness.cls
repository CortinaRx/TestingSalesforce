public class Fitness {
    private static Integer contador = 0;
    
    public Fitness(){
        contador++;
        System.debug(contador);
    }
    
    public Decimal calculateBMI(Decimal bdyWeight, Decimal bdyHeight){
        Decimal numero = bdyWeight / (bdyHeight * bdyHeight);
        System.debug('Tu BMI es: ' + numero );
        return numero;
    }
    
    public String paceCalculator(Integer kms, Integer tiempo){
        String distance = String.valueOf(tiempo/kms );
        return 'Tu velocidad es : '+ distance;
    }

}