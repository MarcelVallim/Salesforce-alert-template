import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class LightningModalLWC extends LightningModal {
    // Propriedades para conteúdo e texto do cabeçalho do modal
    @api content;
    @api headerText;
}
