@isTest
public class Covid19Test {
    @isTest
    public static void treatPatientTest(){
        Covid19 jaipur = new Covid19(10);
        Integer jaipurNumber = jaipur.getTreated();
        //check if the count is 10 or NOT
        //
        System.assertEquals(10, jaipurNumber);
        
        Covid19 jaipur2 = new Covid19(112);
        Integer jaipur2Number = jaipur2.getTreated();
        jaipur2.treatPatient();
        System.assertEquals(113, jaipur2.recoveredInCountry );

        
    }
    
    

}