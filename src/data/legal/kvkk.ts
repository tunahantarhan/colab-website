import { company } from '../site';
import type { Lang } from '../../i18n/ui';

// The KVKK (Turkish data protection law) privacy notice.
// This is a DRAFT written from what the site actually does: no contact form, no accounts, no cookies.
// Values in square brackets are still unknown and must be filled in, and a lawyer should review the text before launch.
// COLAB has no KEP (registered email) address, so the KEP lines were left out; add them back if one is obtained.
// Hosting and email are both with Doruk Net in Turkey, so there is no transfer abroad to disclose. Moving either
// to a provider abroad (e.g. Cloudflare, Google Workspace) means section 5 needs a KVKK Article 9 statement again.
// If the site starts collecting data in a new way (a form, analytics, a chat widget), sections 2, 4 and 5 must be updated.

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
    draft: true,
    title: 'Kişisel Verilerin Korunması Hakkında Aydınlatma Metni',
    intro:
      `${company.tradeName} ("COLAB" veya "Şirket") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla; internet sitemizi ziyaret eden ve bizimle iletişime geçen kişilerin kişisel verilerini hangi amaçlarla ve nasıl işlediğimizi bu metinle açıklıyoruz.`,
    sections: [
      {
        heading: '1. Veri sorumlusu',
        list: [
          `Unvan: ${company.tradeName}`,
          `Adres: ${address}`,
          `E-posta: ${company.email}`,
          'MERSİS numarası: [MERSİS numarası]',
        ],
      },
      {
        heading: '2. İşlenen kişisel veriler',
        list: [
          'Kimlik ve iletişim verileri: Bize e-posta veya telefonla ulaştığınızda paylaştığınız ad, soyad, e-posta adresi, telefon numarası, çalıştığınız kurum ve unvanınız.',
          'Talep bilgileri: Mesajlarınızda ilettiğiniz bilgiler ve taleplerinizin içeriği.',
          'İşlem güvenliği verileri: Siteyi ziyaret ettiğinizde barındırma hizmeti sağlayıcısının sunucularında teknik olarak oluşan IP adresi, tarayıcı bilgisi, ziyaret tarihi ve saati gibi kayıtlar.',
        ],
        after: ['Sitemizde iletişim formu, üyelik sistemi ve çerez bulunmamaktadır.'],
      },
      {
        heading: '3. Kişisel verilerin işlenme amaçları',
        list: [
          'Bilgi, teklif ve demo taleplerinizi yanıtlamak ve sizinle iletişim kurmak',
          'Ürün ve hizmetlerimize ilişkin sözleşme öncesi süreçleri yürütmek',
          'Sitenin güvenliğini sağlamak ve kötüye kullanımı önlemek',
          'Hukuki yükümlülüklerimizi yerine getirmek ve yetkili kurumların taleplerini karşılamak',
        ],
      },
      {
        heading: '4. Toplama yöntemi ve hukuki sebep',
        paragraphs: [
          'Kişisel verileriniz, bize e-posta veya telefonla ulaşmanız ve sitemizi ziyaret etmeniz yoluyla, kısmen otomatik yollarla elektronik ortamda toplanır ve KVKK md. 5/2 kapsamında aşağıdaki hukuki sebeplere dayanılarak işlenir:',
        ],
        list: [
          '(c) Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması (teklif ve demo talepleri)',
          '(ç) Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması',
          '(f) İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması (taleplerinize yanıt verilmesi, site güvenliği)',
        ],
      },
      {
        heading: '5. Kişisel verilerin aktarılması',
        paragraphs: ['Kişisel verileriniz, yukarıdaki amaçlarla sınırlı olmak üzere;'],
        list: [
          'Hizmet aldığımız barındırma ve e-posta hizmeti sağlayıcısına (Doruk Net),',
          'Talep edilmesi halinde yetkili kamu kurum ve kuruluşlarına',
        ],
        after: [
          'aktarılabilir. Kişisel verileriniz yurt dışına aktarılmamaktadır.',
        ],
      },
      {
        heading: '6. Saklama süresi',
        paragraphs: [
          'Kişisel verileriniz, işleme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen süreler boyunca saklanır; bu sürelerin sonunda silinir, yok edilir veya anonim hale getirilir.',
        ],
      },
      {
        heading: '7. Haklarınız',
        paragraphs: ['KVKK md. 11 uyarınca veri sorumlusuna başvurarak;'],
        list: [
          'Kişisel verilerinizin işlenip işlenmediğini öğrenme,',
          'Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,',
          'Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,',
          'Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,',
          'Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme,',
          'KVKK md. 7’de öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme,',
          'Düzeltme, silme ve yok etme işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,',
          'İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,',
          'Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme',
        ],
        after: ['haklarına sahipsiniz.'],
      },
      {
        heading: '8. Başvuru yöntemi',
        paragraphs: [
          `Taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ’e uygun olarak; yazılı şekilde ${address} adresimize ya da daha önce tarafımıza bildirdiğiniz ve sistemimizde kayıtlı bulunan e-posta adresinizden ${company.email} adresine iletebilirsiniz. Başvurunuz, talebin niteliğine göre en geç otuz gün içinde ücretsiz olarak sonuçlandırılır.`,
        ],
      },
    ],
    updated: '[Yayın tarihi]',
  },
  en: {
    draft: true,
    title: 'Privacy Notice on the Protection of Personal Data',
    intro:
      `As ${company.tradeName} ("COLAB" or the "Company"), acting as data controller under the Turkish Personal Data Protection Law No. 6698 ("KVKK"), we explain in this notice why and how we process the personal data of people who visit our website and contact us. The Turkish version of this notice prevails.`,
    sections: [
      {
        heading: '1. Data controller',
        list: [
          `Company name: ${company.tradeName}`,
          `Address: ${address}`,
          `Email: ${company.email}`,
          'MERSIS number: [MERSIS number]',
        ],
      },
      {
        heading: '2. Personal data we process',
        list: [
          'Identity and contact details: the name, email address, phone number, organisation and job title you share when you contact us by email or phone.',
          'Request details: the information in your messages and the content of your requests.',
          'Security data: records created on our hosting provider’s servers when you visit the site, such as IP address, browser details and the date and time of the visit.',
        ],
        after: ['Our website has no contact form, no user accounts and uses no cookies.'],
      },
      {
        heading: '3. Why we process personal data',
        list: [
          'To answer your information, quote and demo requests and to communicate with you',
          'To carry out pre-contract steps relating to our products and services',
          'To keep the website secure and prevent misuse',
          'To meet our legal obligations and respond to requests from competent authorities',
        ],
      },
      {
        heading: '4. How we collect data and the legal basis',
        paragraphs: [
          'Your personal data is collected electronically, partly by automated means, when you contact us by email or phone and when you visit our website. It is processed on the following legal grounds under Article 5(2) of the KVKK:',
        ],
        list: [
          '(c) It is directly related to entering into or performing a contract (quote and demo requests)',
          '(ç) It is necessary for the data controller to comply with a legal obligation',
          '(f) It is necessary for the legitimate interests of the data controller, provided your fundamental rights and freedoms are not harmed (answering your requests, website security)',
        ],
      },
      {
        heading: '5. Transfers of personal data',
        paragraphs: ['Limited to the purposes above, your personal data may be transferred to:'],
        list: [
          'our hosting and email service provider (Doruk Net);',
          'competent public authorities, when they request it.',
        ],
        after: [
          'Your personal data is not transferred outside Turkey.',
        ],
      },
      {
        heading: '6. Retention',
        paragraphs: [
          'Your personal data is kept for as long as the purpose of processing requires and for the periods set out in the relevant legislation. At the end of these periods it is deleted, destroyed or anonymised.',
        ],
      },
      {
        heading: '7. Your rights',
        paragraphs: ['Under Article 11 of the KVKK, you have the right to:'],
        list: [
          'learn whether your personal data is processed;',
          'request information about the processing if it is;',
          'learn the purpose of processing and whether the data is used accordingly;',
          'know the third parties in Turkey or abroad to whom your data is transferred;',
          'ask for incomplete or inaccurate data to be corrected;',
          'ask for your data to be deleted or destroyed under the conditions of Article 7 of the KVKK;',
          'ask for corrections, deletions and destructions to be notified to the third parties your data was transferred to;',
          'object to a decision against you that results solely from automated analysis of your data;',
          'claim compensation if you suffer damage because your data was processed unlawfully.',
        ],
      },
      {
        heading: '8. How to apply',
        paragraphs: [
          `You can send your request in line with the Communiqué on the Procedures and Principles of Application to the Data Controller: in writing to ${address}, or to ${company.email} from an email address you have previously given us and that is registered in our records. We will respond free of charge within thirty days at the latest, depending on the nature of the request.`,
        ],
      },
    ],
    updated: '[Publication date]',
  },
};
