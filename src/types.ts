export interface ServiceCard {
  id: string;
  category: string;
  title: string;
  description: string;
  tag: string;
  iconName: string;
}

export interface ConsultationForm {
  name: string;
  email: string;
  company: string;
  currentTooling: string[];
  operationNotes: string;
}
