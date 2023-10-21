public class OppTriggerHandler {
    
    public void beforeUpdateOpp(List<Opportunity> lstOppNew, Map<Id,Opportunity> lstOppOld){
        for(Opportunity opp: lstOppNew){
            if(lstOppOld.get(opp.id).Type != Opp.Type && lstOppOld.get(opp.Id).StageName != opp.StageName && lstOppOld.get(opp.Id).Amount != opp.Amount){
                System.debug('Esto tiene que cambiar a true y es ' + opp.NeedRevision__c);
                opp.NeedRevision__c = true;
                System.debug('Cambiado a estado: ' +  opp.NeedRevision__c );
            }else{
                opp.NeedRevision__c = false;
            }
        }
        
        
    }
    
    public void AfterUpdateOpp(List<Opportunity> lstNewOpp, Map<Id,Opportunity> lstNewOppMap){
       	Set<Id> AccInOpps = new Set<Id>();
        
        
        
    }
    

}
// && lstOppOld.get(opp.Id).StageName != opp.StageName && lstOppOld.get(opp.Id).Type && lstOppOld.get(opp.Id).Amount != opp.Amount