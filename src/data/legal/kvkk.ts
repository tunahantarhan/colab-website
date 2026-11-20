import { company } from '../site';
import type { Lang } from '../../i18n/ui';

// The KVKK (Turkish data protection law) privacy notice.
// The Turkish text was approved by management on 20.11.2026. Three things differ from the text they sent, so that it
// matches what the site actually does: the site has no form, so "demo form" wording became email and phone; the MERSIS
// number was kept; and the sentence about no transfer abroad was kept (hosting and email are both with Doruk Net in Turkey).
// Moving hosting or email abroad (e.g. Cloudflare, Google Workspace) means section 4 needs a KVKK Article 9 statement.
// If the site gets a contact or demo form, sections 2 and 5 should describe it again.

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  /** Paragraphs that follow the list, e.g. a closing sentence. */
  after?: string[];
}

export interface LegalDocument {
  /** While true, the page shows a notice that the text is awaiting legal review. */
  draft: boolean;
  title: string;
  intro: string;
  sections: LegalSection[];
  updated: string;
}

const address = company.addressLines.join(' ');

export const kvkkNotice: Record<Lang, LegalDocument> = {
  tr: {
    draft: false,
    title: 'KVKK Aydınlatma Metni',
    intro:
      '6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu olarak kişisel verileriniz aşağıda açıklandığı şekilde işlenmektedir.',
    sections: [
      {
        heading: '1. Veri sorumlusu',
        list: [
          `Unvan: ${company.tradeName}`,
          `Adres: ${address}`,
          `Telefon: ${company.phone}`,
          `E-posta: ${company.email}`,
          'Web sitesi: www.colab.com.tr',
          `MERSİS numarası: ${company.mersis}`,
        ],
      },
      {
        heading: '2. Hangi verilerinizi topluyoruz?',
        paragraphs: ['Bize e-posta veya telefonla ulaştığınızda;'],
        list: [
          'Ad ve soyad',
          'Kurum / OSB adı',
          'Telefon numarası',
          'E-posta adresi',
          'Mesajınızda paylaştığınız bilgiler',
        ],
        after: [
          'toplanmaktadır.',
          'COLAB yazılımını kullanan OSB ve kurumların kendi sistemlerine girdiği veriler, o kurumun sorumluluğundadır. Biz, yazılım sağlayıcısı olarak o verilere bakım ve destek hizmeti dışında erişmiyor ve onları işlemiyoruz.',
        ],
      },
      {
        heading: '3. Verilerinizi neden işliyoruz?',
        list: [
          'Demo talebinize geri dönüş yapmak',
          'Teklif ve bilgi taleplerinizi yanıtlamak',
          'İletişim kurmak',
          'Yasal yükümlülüklerimizi yerine getirmek',
          'Web sitemizin güvenliğini sağlamak',
        ],
      },
      {
        heading: '4. Verilerinizi kimlerle paylaşıyoruz?',
        paragraphs: ['Verileriniz;'],
        list: [
          'Yasal zorunluluk halinde yetkili kamu kurum ve kuruluşları ile,',
          'Web sitesi barındırma ve teknik destek aldığımız hizmet sağlayıcıları ile',
        ],
        after: [
          'paylaşılabilir. Açık rızanız olmadan üçüncü kişilerle pazarlama amacıyla paylaşılmamaktadır. Verileriniz yurt dışına aktarılmamaktadır.',
        ],
      },
      {
        heading: '5. Verilerinizi nasıl topluyoruz?',
        paragraphs: ['Verileriniz, bize e-posta veya telefonla ulaşmanız yoluyla elektronik ortamda toplanmaktadır.'],
      },
      {
        heading: '6. Haklarınız nelerdir?',
        paragraphs: ['KVKK\'nın 11. maddesi uyarınca;'],
        list: [
          'Verilerinizin işlenip işlenmediğini öğrenme,',
          'İşlenmişse bilgi talep etme,',
          'İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme,',
          'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,',
          'Eksik veya yanlış işlenmişse düzeltilmesini isteme,',
          'Silinmesini veya yok edilmesini isteme,',
          'Düzeltme ve silme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme,',
          'Otomatik sistemler ile analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme,',
          'Kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme',
        ],
        after: ['haklarına sahipsiniz.'],
      },
      {
        heading: '7. Başvuru yöntemi',
        paragraphs: [
          `Haklarınızı kullanmak için talebinizi yazılı olarak yukarıda yer alan şirket adresine veya ${company.email} e-posta adresine iletebilirsiniz.`,
          'Talebiniz en geç 30 gün içinde yanıtlanacaktır.',
        ],
      },
    ],
    updated: '20 Kasım 2026',
  },
  en: {
    draft: false,
    title: 'KVKK Privacy Notice',
    intro:
      'Under the Turkish Personal Data Protection Law No. 6698 ("KVKK"), we as data controller process your personal data as described below. The Turkish version of this notice prevails.',
    sections: [
      {
        heading: '1. Data controller',
        list: [
          `Company name: ${company.tradeName}`,
          `Address: ${address}`,
          `Phone: ${company.phone}`,
          `Email: ${company.email}`,
          'Website: www.colab.com.tr',
          `MERSIS number: ${company.mersis}`,
        ],
      },
      {
        heading: '2. What data do we collect?',
        paragraphs: ['When you contact us by email or phone, we collect:'],
        list: [
          'your name,',
          'your organisation or industrial zone,',
          'your phone number,',
          'your email address,',
          'any information you share in your message.',
        ],
        after: [
          'Data that industrial zones and organisations enter into their own COLAB systems is their responsibility. As the software provider, we do not access or process that data other than to provide maintenance and support.',
        ],
      },
      {
        heading: '3. Why do we process your data?',
        list: [
          'To respond to your demo request',
          'To answer your quote and information requests',
          'To communicate with you',
          'To meet our legal obligations',
          'To keep our website secure',
        ],
      },
      {
        heading: '4. Who do we share your data with?',
        paragraphs: ['Your data may be shared with:'],
        list: [
          'competent public authorities, where the law requires it;',
          'the service providers we use for website hosting and technical support.',
        ],
        after: [
          'It is not shared with third parties for marketing without your explicit consent, and it is not transferred outside Turkey.',
        ],
      },
      {
        heading: '5. How do we collect your data?',
        paragraphs: ['Your data is collected electronically when you contact us by email or phone.'],
      },
      {
        heading: '6. What are your rights?',
        paragraphs: ['Under Article 11 of the KVKK, you have the right to:'],
        list: [
          'learn whether your data is processed;',
          'request information about the processing if it is;',
          'learn the purpose of processing and whether the data is used accordingly;',
          'know the third parties in Turkey or abroad to whom your data is transferred;',
          'ask for incomplete or inaccurate data to be corrected;',
          'ask for your data to be deleted or destroyed;',
          'ask for corrections and deletions to be notified to the third parties your data was transferred to;',
          'object to a decision against you that results from automated analysis of your data;',
          'claim compensation if you suffer damage because your data was processed unlawfully.',
        ],
      },
      {
        heading: '7. How to apply',
        paragraphs: [
          `To use your rights, send your request in writing to the company address above or by email to ${company.email}.`,
          'We will respond within 30 days at the latest.',
        ],
      },
    ],
    updated: '20 November 2026',
  },
};
