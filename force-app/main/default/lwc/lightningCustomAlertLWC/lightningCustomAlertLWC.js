// Importação de módulos e definição das variáveis do componente
import { LightningElement, api, wire } from 'lwc';
import shouldDisplayComponent from '@salesforce/apex/GBL_CustomAlertOnRecordPage_Controller.shouldDisplayComponent';
import lightningModalLWC from 'c/gbl_CustomAlertModal';
export default class lightningCustomAlertLWC extends LightningElement {
    // Propriedades expostas para configuração
    @api message;
    @api more;
    @api showLink;
    @api criteria;
    @api recordId;
    @api objectApiName;

    // Variáveis de controle e estilização
    _selectedOption;
    sldsNotify = 'slds-notify slds-notify_alert slds-alert_error';
    iconName = 'utility:error';
    iconVariant = 'inverse';
    showComponent = false;

    // Getter e Setter para a opção selecionada
    @api
    get selectedOption() {
        return this._selectedOption;
    }

    set selectedOption(value) {
        this._selectedOption = value;
        this.updateVariables();
    }

    // Atualização dinâmica das variáveis com base na opção selecionada
    updateVariables() {
        // Lógica para determinar o estilo e ícone com base na opção
    }

    // Consulta ao servidor para verificar a visibilidade do componente
 // Consulta ao servidor para verificar a visibilidade do componente
    @wire(shouldDisplayComponent, { recordId: '$recordId', objectApiName: '$objectApiName', criteria: '$criteria' })
    wiredResult({ error, data }) {
        if (error) {
            console.log('Error on retrieve query using the provided criteria', error);
            this.showComponent = false;
        } else if (this.criteria != null) {
            this.showComponent = data;
        } else {
            this.showComponent = true;
        }
        console.log('Show custom alert component:', this.showComponent);
    }

    // Função para exibir um modal com informações adicionais
    showModal = false; // Alterei para false para começar oculto
    async handleShowModal() {
        const modal = this.template.querySelector('c-lightning-modal-lwc');
        modal.openModal({
            size: 'small',
            content: this.more,
            headerText: this.message
        });
    }
}