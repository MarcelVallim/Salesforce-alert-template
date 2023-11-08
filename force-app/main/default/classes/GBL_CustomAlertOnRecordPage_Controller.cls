public class GBL_CustomAlertOnRecordPage_Controller {
    @AuraEnabled(cacheable=true)
    public static Boolean shouldDisplayComponent(Id recordId, String objectApiName, String criteria) {
        // Lógica para verificar se o componente deve ser exibido com base nos critérios
    }
}