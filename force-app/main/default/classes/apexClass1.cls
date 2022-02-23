public with sharing class apexClass1 {
    @AuraEnabled(cacheable=true)
    public static List<Account> getData(integer noofRecords) {
       System.debug('Enter Apex class');
        return [SELECT Id,Name,Phone FROM Account LIMIT :noofRecords];
    }
}
