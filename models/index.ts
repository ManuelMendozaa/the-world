export interface Country {
  code: number;
  iso: string;
  name: MultiLanguageText;
  structure: string;
  flag: Flag;
}

export interface Phone {
  country?: string;
  code?: string;
  number?: string;
}

export interface MultiLanguageText {
  es: string;
  en: string;
}

export interface Flag {
  emoji: string;
  icon: React.ReactNode;
}
