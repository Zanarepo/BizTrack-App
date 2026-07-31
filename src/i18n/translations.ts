export type LanguageCode = 'en' | 'pid' | 'ha' | 'ig' | 'yo';

export interface LanguageMeta {
  code: LanguageCode;
  label: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  { code: 'en', label: 'English', flag: '🇳🇬' },
  { code: 'pid', label: 'Pidgin', flag: '🗣️' },
  { code: 'ha', label: 'Hausa', flag: '🏛️' },
  { code: 'ig', label: 'Igbo', flag: '🌴' },
  { code: 'yo', label: 'Yorùbá', flag: '👑' },
];

export type TranslationKey =
  | 'appTitle'
  | 'appTagline'
  | 'heroBadge'
  | 'heroDesc'
  | 'getStartedFree'
  | 'existingAccount'
  | 'footerDesc'
  | 'signInTitle'
  | 'signInSubtitle'
  | 'registerTitle'
  | 'registerSubtitle'
  | 'phoneLabel'
  | 'phonePlaceholder'
  | 'phoneHelper'
  | 'pinLabel'
  | 'pinPlaceholder'
  | 'ownerNameLabel'
  | 'ownerNamePlaceholder'
  | 'forgotPin'
  | 'useMagicLink'
  | 'signInButton'
  | 'registerButton'
  | 'noAccountYet'
  | 'registerNowLink'
  | 'alreadyRegistered'
  | 'signInHereLink'
  | 'securityQuestionLabel'
  | 'secretAnswerLabel'
  | 'secretAnswerPlaceholder'
  | 'secretAnswerHelper'
  | 'offlineNotice'
  | 'dashboard'
  | 'transactions'
  | 'logout'
  | 'noRecords'
  | 'welcomeBack'
  | 'invTitle'
  | 'invSubtitle'
  | 'invAddBtn'
  | 'invHistoryBtn'
  | 'invSearchPlaceholder'
  | 'invLowStockToggle'
  | 'colItemName'
  | 'colCategory'
  | 'colSellingPrice'
  | 'colCostPrice'
  | 'colRemainingStock'
  | 'colActions'
  | 'btnAdjust'
  | 'btnEdit'
  | 'btnDelete'
  | 'invEmptyState'
  | 'statTotalItems'
  | 'unitItems'
  | 'statTotalValue'
  | 'statValueSub'
  | 'statLowStock'
  | 'unitAlerts'
  | 'statOutOfStock'
  | 'modalTitleAdd'
  | 'modalTitleEdit'
  | 'fieldItemName'
  | 'helperItemName'
  | 'fieldCategory'
  | 'optNewCategory'
  | 'fieldSku'
  | 'fieldSellingPrice'
  | 'helperSellingPrice'
  | 'fieldCostPrice'
  | 'helperCostPrice'
  | 'fieldUnit'
  | 'fieldOpeningStock'
  | 'helperOpeningStock'
  | 'fieldLowStock'
  | 'helperLowStock'
  | 'fieldRemarks'
  | 'placeholderRemarks'
  | 'btnCancel'
  | 'btnSaveItem'
  | 'btnSaveChanges'
  | 'modalTitleCategory'
  | 'fieldCatName'
  | 'placeholderCatName'
  | 'fieldCatColor'
  | 'helperCatColor'
  | 'btnSaveCategory'
  | 'modalTitleAdjust'
  | 'currentStockText'
  | 'fieldReason'
  | 'reasonStockIn'
  | 'reasonStockOut'
  | 'reasonDamaged'
  | 'reasonLost'
  | 'reasonReturn'
  | 'fieldAdjustQty'
  | 'fieldAdjustCost'
  | 'fieldAdjustRemarks'
  | 'placeholderAdjustRemarks'
  | 'btnSaveAdjustment'
  | 'historyTitle'
  | 'historySubtitle'
  | 'historySearchPlaceholder'
  | 'filterAllMovements'
  | 'colDate'
  | 'colType'
  | 'colQtyChange'
  | 'colNewBalance'
  | 'colRemarks';

type TranslationDictionary = Record<LanguageCode, Record<TranslationKey, string>>;

export const TRANSLATIONS: TranslationDictionary = {
  en: {
    appTitle: 'BizTrack',
    appTagline: 'Simple Business Record Keeping for Every Entrepreneur',
    heroBadge: '✨ Offline-First Financial Tracking',
    heroDesc:
      'Designed specifically for market traders, food vendors, fashion designers, and growing enterprises. Record inventory, calculate profits automatically, and access your records anytime—even without internet!',
    getStartedFree: 'Get Started Free',
    existingAccount: 'Existing Account',
    footerDesc: 'Empowering everyday African entrepreneurs with intuitive digital bookkeeping.',
    signInTitle: 'Sign In to Your Business',
    signInSubtitle:
      'Enter your registered Mobile Phone Number (or Email) and your 4-Digit PIN / Password.',
    registerTitle: 'Register Your Business',
    registerSubtitle:
      'No email or accounting skills required! Create an account using your mobile phone number and a simple 4-Digit PIN.',
    phoneLabel: 'Mobile Phone Number (or Email Address)',
    phonePlaceholder: 'e.g., 08012345678',
    phoneHelper: 'Local traders can use their phone number. Supermarkets can use email.',
    pinLabel: '4-Digit PIN or Password',
    pinPlaceholder: 'e.g., 1234 (just like your POS PIN)',
    ownerNameLabel: 'Owner Full Name',
    ownerNamePlaceholder: 'e.g., Mama Ngozi',
    forgotPin: 'Forgot PIN / Password?',
    useMagicLink: 'Use Email Magic Link',
    signInButton: 'Sign In 🚀',
    registerButton: 'Create Business Account 🚀',
    noAccountYet: "Don't have a business account yet?",
    registerNowLink: 'Register Now',
    alreadyRegistered: 'Already registered your business?',
    signInHereLink: 'Sign In Here',
    securityQuestionLabel: 'Security Recovery Question (If you ever forget your PIN)',
    secretAnswerLabel: 'Your Secret Answer',
    secretAnswerPlaceholder: 'e.g., Onitsha or Emeka',
    secretAnswerHelper: 'Remember this answer so you can reset your PIN without needing an email!',
    offlineNotice: 'No internet connection. Changes will be saved locally offline!',
    dashboard: 'Dashboard',
    transactions: 'Recent Transactions',
    logout: 'Sign Out',
    noRecords: 'No business records recorded yet.',
    welcomeBack: 'Welcome back to your business dashboard!',
    invTitle: 'My Shop Items & Stock',
    invSubtitle:
      'See all your market goods, selling prices, and how much stock you have remaining.',
    invAddBtn: 'Add New Item',
    invHistoryBtn: 'Stock History',
    invSearchPlaceholder: 'Search for shop items by name or category...',
    invLowStockToggle: 'Show Low Stock Only',
    colItemName: 'ITEM NAME',
    colCategory: 'CATEGORY',
    colSellingPrice: 'SELLING PRICE',
    colCostPrice: 'COST PRICE',
    colRemainingStock: 'REMAINING STOCK',
    colActions: 'ACTIONS',
    btnAdjust: 'Update Stock',
    btnEdit: 'Edit Item',
    btnDelete: 'Delete Item',
    invEmptyState: 'You have not added any items matching your search yet.',
    statTotalItems: 'TOTAL ITEMS',
    unitItems: 'items',
    statTotalValue: 'TOTAL STOCK VALUE',
    statValueSub: 'Calculated from your cost prices',
    statLowStock: 'LOW STOCK ITEMS',
    unitAlerts: 'low',
    statOutOfStock: 'OUT OF STOCK',
    modalTitleAdd: 'Add New Item to Your Shop',
    modalTitleEdit: 'Edit Item Details',
    fieldItemName: 'Item Name',
    helperItemName: 'The name customers call this item (e.g., Garri, Rice, Ankara)',
    fieldCategory: 'Category / Group',
    optNewCategory: '+ Create New Category...',
    fieldSku: 'Item Code or Barcode (Optional)',
    fieldSellingPrice: 'Selling Price (How much you sell 1)',
    helperSellingPrice: 'Price customer pays for one piece, bag, or yard',
    fieldCostPrice: 'Cost Price (How much you bought 1)',
    helperCostPrice: 'We use this to calculate your profit automatically!',
    fieldUnit: 'Unit of Measure (How is it measured?)',
    fieldOpeningStock: 'Current Stock (How many do you have right now?)',
    helperOpeningStock: 'We will record this as your starting inventory balance',
    fieldLowStock: 'Low Stock Warning Level (When should we remind you?)',
    helperLowStock: 'We will alert you when stock drops to this number so you can buy more',
    fieldRemarks: 'Additional Notes (Optional)',
    placeholderRemarks: 'e.g., Bought from Alaba market, shop shelf position, supplier phone',
    btnCancel: 'Cancel',
    btnSaveItem: 'Save Item to Shop',
    btnSaveChanges: 'Save Changes',
    modalTitleCategory: 'Create New Item Category',
    fieldCatName: 'Category Name',
    placeholderCatName: 'e.g., Provisions, Drinks, Clothes, Foodstuffs',
    fieldCatColor: 'Choose Color for this Category',
    helperCatColor: 'Helps you recognize this group easily on your screen',
    btnSaveCategory: 'Save Category',
    modalTitleAdjust: 'Update Stock Quantity',
    currentStockText: 'Current stock remaining right now: {n}',
    fieldReason: 'Why are you updating stock?',
    reasonStockIn: 'Added Stock (New market purchases or supply)',
    reasonStockOut: 'Removed Stock (Used by shop or giveaway)',
    reasonDamaged: 'Damaged / Spoilt item',
    reasonLost: 'Lost / Missing item',
    reasonReturn: 'Customer Returned Item',
    fieldAdjustQty: 'How many items?',
    fieldAdjustCost: 'Cost per unit (Optional)',
    fieldAdjustRemarks: 'Reason / Notes (Required for your records)',
    placeholderAdjustRemarks: 'e.g., Bought 20 new bags from Alhaji, or broken container',
    btnSaveAdjustment: 'Save Stock Update',
    historyTitle: 'Stock History & Records',
    historySubtitle: 'See every time stock was added, removed, sold, or updated in your shop.',
    historySearchPlaceholder: 'Search records by item name or reason...',
    filterAllMovements: 'All Types of Movements',
    colDate: 'DATE & TIME',
    colType: 'WHAT HAPPENED',
    colQtyChange: 'QUANTITY CHANGED',
    colNewBalance: 'NEW REMAINING STOCK',
    colRemarks: 'REASON / NOTES',
  },
  pid: {
    appTitle: 'BizTrack',
    appTagline: 'Easy book-keeping for every hustle & business person',
    heroBadge: '✨ No Internet Required! Record Better',
    heroDesc:
      'We make am special for market traders, food sellers, tailors, and business hustle. Measure your market stock, count your daily profit automatically, and check your records anytime—even if internet no dey!',
    getStartedFree: 'Open Account Free',
    existingAccount: 'Enter Your Account',
    footerDesc: 'Supporting African business hustlers with easy simple record keeping.',
    signInTitle: 'Enter Your Business Records',
    signInSubtitle: 'Put your Phone Number (or Email) with your 4-Digit Secret PIN / Password.',
    registerTitle: 'Open Your Business Account Here',
    registerSubtitle:
      'No need for email or book-keeping school! Open your account with just your phone number and 4-Digit PIN.',
    phoneLabel: 'Your Phone Number (or Email)',
    phonePlaceholder: 'e.g., 08012345678',
    phoneHelper: 'Traders fit put their phone number. Supermarkets fit use email.',
    pinLabel: 'Your Secret 4-Digit PIN',
    pinPlaceholder: 'e.g., 1234 (same like your POS PIN)',
    ownerNameLabel: 'Your Full Name',
    ownerNamePlaceholder: 'e.g., Mama Ngozi',
    forgotPin: 'You don forget PIN / Password?',
    useMagicLink: 'Use Email Magic Link',
    signInButton: 'Enter Inside 🚀',
    registerButton: 'Start Account Now 🚀',
    noAccountYet: 'You never register your business before?',
    registerNowLink: 'Open Account Now',
    alreadyRegistered: 'You don register your business already?',
    signInHereLink: 'Enter Inside Here',
    securityQuestionLabel: 'Secret Question (In case you forget your PIN)',
    secretAnswerLabel: 'Your Secret Answer',
    secretAnswerPlaceholder: 'e.g., Onitsha or Emeka',
    secretAnswerHelper: 'Remember this answer well well so you fit change PIN without email!',
    offlineNotice: 'Internet no dey right now. We done save everything offline for your phone!',
    dashboard: 'Business Corner',
    transactions: 'Recent Sales & Expenses',
    logout: 'Comot (Sign Out)',
    noRecords: 'You never record any market transaction today.',
    welcomeBack: 'Welcome back to your business corner!',
    invTitle: 'My Market Items & Stock',
    invSubtitle:
      'See all your market goods, selling price, and how many stock remain inside store.',
    invAddBtn: 'Add New Market Item',
    invHistoryBtn: 'Check Stock History',
    invSearchPlaceholder: 'Search your market item by name or group...',
    invLowStockToggle: 'Show Only Items Wey Want Finish',
    colItemName: 'ITEM NAME',
    colCategory: 'ITEM GROUP',
    colSellingPrice: 'SELLING PRICE',
    colCostPrice: 'COST PRICE (BUYING AMOUNT)',
    colRemainingStock: 'STOCK WEY REMAIN',
    colActions: 'ACTIONS',
    btnAdjust: 'Change Stock',
    btnEdit: 'Edit Item',
    btnDelete: 'Delete Item',
    invEmptyState: 'You never put any market item wey match your search yet.',
    statTotalItems: 'MARKET ITEMS',
    unitItems: 'items',
    statTotalValue: 'TOTAL STOCK WORTH',
    statValueSub: 'We calculate am from your buying cost price',
    statLowStock: 'LOW STOCK ITEMS',
    unitAlerts: 'low',
    statOutOfStock: 'OUT OF STOCK ITEMS',
    modalTitleAdd: 'Add New Item Inside Your Store',
    modalTitleEdit: 'Edit Item Details',
    fieldItemName: 'Name of Item',
    helperItemName: 'The common name wey customers dey call am (e.g., Garri, Rice, Ankara)',
    fieldCategory: 'Category / Group (Where e belong?)',
    optNewCategory: '+ Make New Group...',
    fieldSku: 'Item Code or Barcode (If e get am)',
    fieldSellingPrice: 'Selling Price (How much you dey sell 1?)',
    helperSellingPrice: 'Amount wey customer go pay for one piece, bag, or yard',
    fieldCostPrice: 'Cost Price (How much you buy 1 from market?)',
    helperCostPrice: 'We go use this one calculate your daily profit automatically!',
    fieldUnit: 'How you dey measure am?',
    fieldOpeningStock: 'How many you get inside shop right now?',
    helperOpeningStock: 'We go record am as your starting market stock',
    fieldLowStock: 'When we make warn you say e want finish?',
    helperLowStock: 'When stock reach this number, we go alert you make you buy more',
    fieldRemarks: 'Extra Notes (Optional)',
    placeholderRemarks: 'e.g., I buy am from Alaba market, shelf corner, supplier number',
    btnCancel: 'Cancel',
    btnSaveItem: 'Save Item Inside Store',
    btnSaveChanges: 'Save Your Changes',
    modalTitleCategory: 'Make New Item Group',
    fieldCatName: 'Name of Group / Category',
    placeholderCatName: 'e.g., Provisions, Drinks, Clothes, Foodstuffs',
    fieldCatColor: 'Choose Color for this Group',
    helperCatColor: 'E go help you quickly spot this group for your screen',
    btnSaveCategory: 'Save Group',
    modalTitleAdjust: 'Update How Many Stock Remain',
    currentStockText: 'Stock wey remain inside store right now: {n}',
    fieldReason: 'Why you dey change the stock number?',
    reasonStockIn: 'I add more stock (New purchases from market)',
    reasonStockOut: 'I take stock out (Used by shop or giveaway)',
    reasonDamaged: 'Stock damage or spoil',
    reasonLost: 'Stock lost or someone steal am',
    reasonReturn: 'Customer return item back to store',
    fieldAdjustQty: 'How many pieces or bags?',
    fieldAdjustCost: 'Cost per unit (Optional)',
    fieldAdjustRemarks: 'Why you change am? (Put reason for record)',
    placeholderAdjustRemarks: 'e.g., I buy 20 bags from Alhaji, or rat chop container',
    btnSaveAdjustment: 'Save Stock Record',
    historyTitle: 'Stock History & Audit Records',
    historySubtitle: 'See every single time stock enter or comot from your market store.',
    historySearchPlaceholder: 'Search history by item name or reason...',
    filterAllMovements: 'All Types of Stock Records',
    colDate: 'DATE & TIME',
    colType: 'WETIN HAPPEN',
    colQtyChange: 'HOW MANY CHANGE',
    colNewBalance: 'NEW REMAINING STOCK',
    colRemarks: 'REASON / NOTES',
  },
  ha: {
    appTitle: 'BizTrack',
    appTagline: 'Sauƙi wajen kiyaye lissafin kowane ɗan kasuwa',
    heroBadge: '✨ Lissafi Ko Ba Tare Da Intanet Ba',
    heroDesc:
      "An tsara ta ne musamman don 'yan kasuwa, masu sayar da abinci, masu dinka sanya, da sauran kasuwanci. Lika hajoji, gane ribarka cikin hanzari, kuma duba lissafinka kowane lokaci ko ba tare da intanet ba!",
    getStartedFree: 'Bude Asusu Kyauta',
    existingAccount: 'Bude Shafin Ka',
    footerDesc: "Taimakawa 'yan kasuwan Afirka na yau da kullum ta hanyar lissafi mai sauqi.",
    signInTitle: 'Shiga Cikin Kasuwancinka',
    signInSubtitle: 'Sa lambar wayarka na kasuwanci (ko imel) da lambar sirri na 4-Digit PIN.',
    registerTitle: 'Bude Asusu na Kasuwancinka',
    registerSubtitle:
      'Ba sai kana da imel ko karatun ilimi ba! Bude asusu da lambar waya da lambar 4-Digit PIN ta sauki.',
    phoneLabel: 'Lambar Waya (ko Imel)',
    phonePlaceholder: 'e.g., 08012345678',
    phoneHelper: "'Yan kasuwa za su iya amfani da lambar waya. Kantuna na iya amfani da imel.",
    pinLabel: 'Lambar Sirri (PIN 4-Digit ko Password)',
    pinPlaceholder: 'e.g., 1234 (kamata kuke yi na POS)',
    ownerNameLabel: 'Cikakken Sunanka na Kasuwa',
    ownerNamePlaceholder: 'e.g., Mama Ngozi ko Alhaji Musa',
    forgotPin: 'Ka manta PIN / Bakin Zaren Sirri?',
    useMagicLink: 'Amfani da Hanyar Imel',
    signInButton: 'Shiga Ciki 🚀',
    registerButton: 'Yi Rajista Yanzu 🚀',
    noAccountYet: 'Baka da asusu na kasuwanci tukuna?',
    registerNowLink: 'Yi Rajista Nan',
    alreadyRegistered: 'Ka riga ka bude asusu na kasuwanci?',
    signInHereLink: 'Shiga Daga Nan',
    securityQuestionLabel: 'Tambayar Tsaron Sirri (Idan ka manta PIN dinka)',
    secretAnswerLabel: 'Amsar Tsaron Sirrinka',
    secretAnswerPlaceholder: 'e.g., Kano ko Zaria',
    secretAnswerHelper: 'Ka tuna wannan amsar sosai don canza PIN dinka ba tare da imel ba!',
    offlineNotice: 'Babu intanet a yanzu. Mun ajije duk lissafin a kan wayarka!',
    dashboard: 'Shafin Kasuwanci',
    transactions: 'Saye da Siyarwa na Yanzu',
    logout: 'Fita (Sign Out)',
    noRecords: 'Babu wajen ciniki ko wani lissafi da aka sa tukuna.',
    welcomeBack: 'Barka da dawowa shafin lissafinka!',
    invTitle: 'Kayayyakin Kantina & Lissafi',
    invSubtitle:
      'Duba duk kayayyakin kasuwarka, farashi, da adadin abin da ya yi saura a shagonka.',
    invAddBtn: 'Ƙara Wani Kaya Yanzu',
    invHistoryBtn: 'Tarihin Saye da Salo',
    invSearchPlaceholder: 'Nemi kaya da sunan shi ko sashin shi...',
    invLowStockToggle: 'Nuna Kawai Kayayyakin da ke Shirin Ƙarewa',
    colItemName: 'SUNAN KAYA',
    colCategory: 'SASHI / KASHIN KAYA',
    colSellingPrice: 'FARASHIN SIYARWA',
    colCostPrice: 'FARASHIN SARI (SIYYAR SHI)',
    colRemainingStock: 'SAURAN KAYA A SHAGO',
    colActions: 'AYYUKA',
    btnAdjust: 'Gyara Adadi',
    btnEdit: 'Gyara Kayan',
    btnDelete: 'Goge Kaya',
    invEmptyState: 'Babu wani kaya da yayi daidai da bincikenka tukuna.',
    statTotalItems: 'ADADIN KAYA',
    unitItems: 'kaya',
    statTotalValue: 'KIMAR KUDIN KAYA',
    statValueSub: 'An lissafta bisa farashin sarinka na kowane kaya',
    statLowStock: 'KAYA DA ZA SU KARE',
    unitAlerts: 'saura',
    statOutOfStock: 'KAYAYYAKI DA SUKA KARE',
    modalTitleAdd: 'Ƙara Wani Sabon Kaya A Shagoka',
    modalTitleEdit: 'Gyara Bayanin Kayan',
    fieldItemName: 'Sunan Kayan',
    helperItemName: 'Sunan da kwastomomi suke kiran shi da shi (msl., Shinkafa, Gari, Atamfa)',
    fieldCategory: 'Sashi / Kayan Aiki',
    optNewCategory: '+ Ƙara Wani Sabon Sashi...',
    fieldSku: 'Lambar Kaya ko Barcode (Zabii ne)',
    fieldSellingPrice: 'Farashin Siyarwa (Nawa zaka siyar ɗaya?)',
    helperSellingPrice: 'Kudin da kwastom zai biya don kwaya ɗaya ko buhu ɗaya',
    fieldCostPrice: 'Farashin Sari (Nawa ka sayo shi a kasuwa?)',
    helperCostPrice: 'Za mu yi amfani da wannan wajen lissafta ribarka ta kowane lokaci!',
    fieldUnit: 'Yaya ake gwada shi? (msl., Kwaya, Buhu, Mita)',
    fieldOpeningStock: 'Adadin da kake da shi a shago yanzu',
    helperOpeningStock: 'Wannan zai zama kafari na bayanin kayan shagonka',
    fieldLowStock: 'Yaushe kake so mu tunatar da kai cewa ya kusa karewa?',
    helperLowStock: 'Idan kayan suka koma wannan adadi, za mu sanar daji don ka sayo wani',
    fieldRemarks: 'Karin Bayani (Idan akwai)',
    placeholderRemarks: 'msl., An sayo daga Kasuwar Kantin Kwari, ko lambar wayar dilari',
    btnCancel: 'Fasawa',
    btnSaveItem: 'Ajiye Kayan A Shago',
    btnSaveChanges: 'Ajiye Sauyawar',
    modalTitleCategory: 'Ƙara Wani Sabon Sashi Ko Ajin Kayan',
    fieldCatName: 'Sunan Sashin / Ajin Kayan',
    placeholderCatName: 'msl., Abinci, Abin shan ruwa, Kaya, Mai da gishiri',
    fieldCatColor: 'Zaɓi Launi don Wannan Sashin',
    helperCatColor: 'Wannan launi zai taimaka maka gane sashin cikin sauki akan wayar ka',
    btnSaveCategory: 'Ajiye Sashin',
    modalTitleAdjust: 'Sabunta Adadin Kayayyaki',
    currentStockText: 'Sauran kayayyaki yanzu a lissafi: {n}',
    fieldReason: 'Me yasa kake canza adadin kayan yanzu?',
    reasonStockIn: 'An ƙara sabon kaya (Saye daga kasuwa ko sari)',
    reasonStockOut: 'An rage kaya (Amfanin shago ko kyauta don tallatawa)',
    reasonDamaged: 'Kaya ya baci ko ya rushe',
    reasonLost: 'Kaya ya bace ko wani ya sato shi',
    reasonReturn: 'Kwastom ya dawo da kayan baya',
    fieldAdjustQty: 'Adadi nawa za a sabunta?',
    fieldAdjustCost: 'Farashin kowane daya (Zabi ne)',
    fieldAdjustRemarks: 'Dalilin sabuntawa (Tsarin tilas ne ga tarihin kasuwancika)',
    placeholderAdjustRemarks: 'msl., Na sayo katan 20 daga wajen Alhaji a kasuwa',
    btnSaveAdjustment: 'Ajiye Sabuntawa',
    historyTitle: 'Tarihin da Lissafin Abin Da Akai Don Kayayya',
    historySubtitle: 'Duba duk wata alamar sauyawa ga kayayyakin shagonka cikin sauki.',
    historySearchPlaceholder: 'Nemi ta sunan kaya ko dalilin sauya kaya...',
    filterAllMovements: 'Duk Ana Tsarin Sauyi Ayyuka',
    colDate: 'RANA DA LOKACI',
    colType: 'ABIN DA YA FARU',
    colQtyChange: 'YAWAN ADADI WAN DA YA SAUYA',
    colNewBalance: 'SABON SAURAN KAYA',
    colRemarks: 'DALILI / BAYANIN SAUYI',
  },
  ig: {
    appTitle: 'BizTrack',
    appTagline: 'Ndekọ ahịa dị mfe maka ndị na-azụ ahịa dum',
    heroBadge: '✨ Ahịa Na-arụ Yana Mgbe Adighi Internet',
    heroDesc:
      'A kwabere ya nke mbụ maka ndị ahịa na mgbidi, ndị nrere nrere, nakwa ndị ufe kpara. Kọwaa akpa ahịa gị, nweta mgbako elele ahịa azu niile na ngọngọ oge—ma ọ bụ mgbe adịghị intanet!',
    getStartedFree: 'Bido N’Ụgwọ Gaghị Kpabigara',
    existingAccount: 'Banye na Akwada Ahịa Gị',
    footerDesc: 'Na-akwalite ikike akpa ahịa ndị Afrịka gaa ozi dijital mfe dị ukwu.',
    signInTitle: 'Banye Na Ndekọ Ahịa Gị',
    signInSubtitle:
      'Banye nọmba ekwentị gị gbatala kọgide ma ọ bụ email yana PIN Nọmba nzuzo 4-digit gị.',
    registerTitle: 'Mee Akụrọnga Ahịa Gị ebe a',
    registerSubtitle:
      'Enweghị mkpa email ma ọ bụ akparamaogugu nkwaru! Mee akpa ahịa ma tinye naanị Nọmba Ekwentị na Nọmba PIN gazi dị 4.',
    phoneLabel: 'Nọmba Ekwentị Gị (ma ọ bụ Email)',
    phonePlaceholder: 'e.g., 08012345678',
    phoneHelper: 'Ndị ahịa nweere onwe ha gazi nọmba ekwentị ekwe na ahịa niile.',
    pinLabel: 'Nọmba nzuzo PIN gị nke 4-digit',
    pinPlaceholder: 'e.g., 1234 (Dịka nọmba POS gị)',
    ownerNameLabel: 'Aha Zuru Oke Nke Onye Ahịa',
    ownerNamePlaceholder: 'e.g., Mama Ngozi ma ọ bụ Chidubem',
    forgotPin: 'I chetụla nọmba nzuzo PIN gị?',
    useMagicLink: 'Ziga na adreesị kpatarazị ogo E-mail Gị',
    signInButton: 'Banye Ugbu A 🚀',
    registerButton: 'Mee Kpaa Ndị Ahịa Gị 🚀',
    noAccountYet: 'Ọ naghị adịrị gị kpa ma ọ dị o doro akpa ahịa nkeni?',
    registerNowLink: 'Debanye Aha Gị Ugbu A',
    alreadyRegistered: 'I dewela Ndekọ Ahịa Gị na kọputa gị ugbu a?',
    signInHereLink: 'Banye Nsogbu Ndu Ebe a',
    securityQuestionLabel: 'Ajụjụ Obo Nzuzo Gị (Mbe ị chetụla nọmba nzuzo PIN gị)',
    secretAnswerLabel: 'Azabere Siri Gị Nzuzo',
    secretAnswerPlaceholder: 'e.g., Onitsha ma ọ bụ Aba',
    secretAnswerHelper:
      'Gbaagide azabere nke a gaa otu nọmba imee PIN gị nkenke nke enweghị email!',
    offlineNotice: 'Intanet adịghị ugbu a. Anyị echebewochi ahịa gị nọmba offline na ekwentị gị!',
    dashboard: 'Obodo Ahịa Gị',
    transactions: 'Azụmaahịa Gị Oge Na Nso Nso A',
    logout: 'Pụọ (Sign Out)',
    noRecords: 'Ọ dịghị azụmaahịa ma ọ bụ ahie dere ugbu a.',
    welcomeBack: 'Nnọọ ọzọ na Ndekọ Ahịa Gị!',
    invTitle: 'Ngongha Ahịa Na Akpa Gị',
    invSubtitle: 'Hụ ngongha ngwoja gị, ọnụ ahịa, na ngụkọta owa niile gị churu na ụzọ ntanịsike.',
    invAddBtn: 'Tụfuo Ngwoja n’Ahịa Gị',
    invHistoryBtn: 'Hụ Otu Ndekọ Ahịa Oge',
    invSearchPlaceholder: 'Tuchie achọpụta akpa ma ọ bụ aha ahịa ebe kachasị mma...',
    invLowStockToggle: 'Zụpere Naanị Nke Kacha Ntakịrị Azụmaahịa Na Gwa Ya',
    colItemName: 'AHA NGWOJA NA AHỊA GỊ',
    colCategory: 'DỌNGHA OBODO AHỊA GỊ',
    colSellingPrice: 'ỌNỤ AHỊA RỊO ERE MERE GA',
    colCostPrice: 'ỌNỤ AGHAKU GỊ GBARA NRERE A',
    colRemainingStock: 'ỌTỤ NGWOJA N’AGATARA N’ỌKỌ GỊ',
    colActions: 'HE ARU YARU',
    btnAdjust: 'Gbanwee Ngwoja a',
    btnEdit: 'Gbanwee Okwa Ya',
    btnDelete: 'Hichapụ ngwoja a',
    invEmptyState: 'Ọ nweghi ihe nchikọnri mbegụlọ nile aruru gi.',
    statTotalItems: 'ỌNỤ ỌNGUGỌ NGWOJA',
    unitItems: 'ngwoja',
    statTotalValue: 'NGỤTỌ UDUM ỌNỤ EZE',
    statValueSub: 'E mere ya mgbakọ site na ego i jịzuru azuzu pụrụ igba otu mgbakọ',
    statLowStock: 'NGWOJA PỤRỤ RECHA',
    unitAlerts: 'ntakịrị',
    statOutOfStock: 'NGWOJA ZAGBULA GBA',
    modalTitleAdd: 'Dehie Ngwoja Ọ Hụ n’Ije Ahịa Gị na Akpa',
    modalTitleEdit: 'Dehie Gburugburu Zere Nsara Nri ngwoja a mgbidi a',
    fieldItemName: 'Aha Ngwoja',
    helperItemName:
      'Aha ụlọm na ndi ahyazube akpala ya ngwo nile (maka atamfa gị ma obu nnu ma okoro ya)',
    fieldCategory: 'Ọgbasa ngwoja ibuzu ihe ahụ ebe akwa hiru ebe a na ndiri ebo',
    optNewCategory: '+ Zikwe Otu Ọhuru ngwoja ahụ n’ahịa otu a nwayọ odo...',
    fieldSku:
      'koodup ma bụ agwa bar azụmaahịa o danye izenri (mgbara nso kpasuru gi mkpeche re gazi mgbirichi)',
    fieldSellingPrice: 'Ere Ya ahụ Ọ nọ Na Omenala ahụ kachasi na onunu ahịa nkem a',
    helperSellingPrice:
      'Ọnụ ahịazị o danye onye ahịa ji kwuo nkwa gị ahụ otu otu mgbasa i chọtụ nsonzu gi bụ oge otu ma akwu ebe a mma-mma m',
    fieldCostPrice:
      'Ego a pụtaru na ahịa e goro yari o (ahịa gị a i goro mfe mgbatala ndekọnụ mma-mma o)',
    helperCostPrice:
      'Anyi na ewe kpalaba gị recha rita n’akụkụ elele ahịa kpatara otu niiri kpakpara ya na kọlụzị ebe a mbido rụ nọ mgbari nzọbute oge!',
    fieldUnit: 'Otu Gịnụ Kpakpara A hụ Na Ewe Tu Ya Agwa Mmadu? (i tute rụ otu akwa ma ọ bu ngige)',
    fieldOpeningStock: 'Agata Ngwo gị Pụwa N’ụka Ugbu a (ihe ị nwere gbata n’obodo ebe a ugbu a)',
    helperOpeningStock:
      'Anwa bụzụ nzara e webe rụ otu kpa akwa otom ya na nnyoncha kpa zọgbụ na mbute mma ya gba mkpecha mma-mma o',
    fieldLowStock:
      'Oge ole ka i na achọ kpam kparazu ya n’ihi na ngwo e chuba azịma re? e wee me kpam kparaba gi ngige a otu otu re',
    helperLowStock:
      'Mbe o danye nkwụji nke oburu otụ obụrọ na ije akpa ebe ya gba nnyochaba kpalita nke ozo nkeni gwa ya ndo mgbasa rita ri a mgbatala gi ri',
    fieldRemarks: 'Obere ozi agba ya ne okwazi kpa ri ewe re m',
    placeholderRemarks: 'dịka atamfa anyanwu ngigba agwọkoro ya n’alụm ma kparita mfe ebe rụ nkem',
    btnCancel: 'kwusi ya mma mma',
    btnSaveItem: 'e kwebekwanụ gụ yari',
    btnSaveChanges:
      'Chebekere Ogo A hụ ngwo n’okoro ya nwayo mbado ri ebe ahụ kpakpụgwu yari n’okụ ahịa a rita gi ri',
    modalTitleCategory: 'Zikwe Mgbara Okpurukpu he a hụ ebo ngwa a',
    fieldCatName: 'Aha ebo e hiri na ọsọ e zobe ahụ ogo kpakpu obiri yari',
    placeholderCatName:
      'e dere he kpakpu ewe re yari obodo obụ kpa a gbu mgbado zikwe mmiri ya ma akpa afo n’akụ rụ yari o',
    fieldCatColor: 'Kwee Uru ụkwụ rita gị ri ruru ngwocha obiri mbe ihu kpa akụ rita ri m',
    helperCatColor:
      'Odi akpukpu na ihu i rebe otu iji hu eziokwu n’otu oku echebe re ekwentị otu nwayi akpa o bu ri mfe rụ yari ri ya o',
    btnSaveCategory: 'chebekwanu ruru ngwa nzere a odo na obiri mbe oku ya nwayọ nkem ebe rụ',
    modalTitleAdjust: 'dozie ihe bu yazi nzube gi ri okwa ya ngwo kpa',
    currentStockText: 'ihenị fụ nkeni ngwo fọdụrụ ugbu a niile: {n}',
    fieldReason: 'Mmadu e chiri nke iwe tu gi gidi odo gi a',
    reasonStockIn: 'a tụchawa o rụrụ ri gị ri ihe eji arita azụ ahịa mfe e goro nwayọ rụ yari m',
    reasonStockOut:
      'okpata gba zọtụtụ otu yari ri otọ m ma ya nwezobe ogo nnyeme n’ike nti kpa ri ebe ahụ odo m',
    reasonDamaged:
      'ihe gbarazuru mụhie otoro yari mgbatara gba pu gbaji mma n’ihi he o bu otu e wee zabe ri yari ebe ya ri ya o mfe kpam ri',
    reasonLost:
      'ngwo fụ e fuzabe rụ ruru gị otọ ya ma ndi ori kpasuru nti nkeni zaba ri yari e wee m',
    reasonReturn: 'nye azụ gbasara akwa e nwezobe yari n’okwu azu rụ ebe a mma-mma o',
    fieldAdjustQty: 'ọtu ole izuzu ihe i ji arita ya rị o ogo otụ yari ri?',
    fieldAdjustCost: 'ego kpam nri ahịa na oge ri o rụrụ ogo (ọkwa i wee chọrọ)',
    fieldAdjustRemarks:
      'Ugwuo ahụ pụgụ e we tu re nti zụrụ odo mgbara ruru (otu oge o zube zere ahụ na e jere)',
    placeholderAdjustRemarks: 'ebibe kpam ya ebe rụ 20 bags na obụ rụ onye ọzo obụ obodo mma-mma m',
    btnSaveAdjustment: 'chebekwanu yari ri o',
    historyTitle: 'Tarihin Ahịa n’okwa gị mbụkọta e kwebekwere he ndekọ',
    historySubtitle: 'Hu ezinne ihe mgbasa na e hirie yari mbe zabe akpa i chigozibe ri o',
    historySearchPlaceholder: 'Tuchie ndekọ ndu zọtụ mgbara re...',
    filterAllMovements: 'Ngongha Izu Ọ zụ akpa n’akwà ahịa mbụ kpa ri ebe a gidi o',
    colDate: 'ỤBỌ CHỊ YANA OGE OBORỤ EBE AHỤ',
    colType: 'HE OBU RỤ O KPA RA M',
    colQtyChange: 'HE GBA RA ODO M',
    colNewBalance: 'HE I NWERE RE UG BU A',
    colRemarks: 'NKO E WE TU RE NTI OGE OBỌRI YE M',
  },
  yo: {
    appTitle: 'BizTrack',
    appTagline: 'Ọkàn ni iṣakoso owo ati kikọ asiko owo fun gbogbo oniṣowo',
    heroBadge: '✨ Ṣíṣàkósò Owo Láláisi Internet Lori Eko Gbagede',
    heroDesc:
      'A ti yan an lara lati ṣe atunke re tààrà fun awọn obinrin ọjà, awọn ta oúnjẹ, títà aṣọ pọlu gbogbo oluṣoju ra igekoko riri! Ni itumo ri ọjà re pata, si koo jale owo si iṣe kàn laisigiri leralera!',
    getStartedFree: 'Bẹ́rẹ́ Alaišiṣi Ọja Lórùn',
    existingAccount: 'Wọlé Ibudo Igbakori Owo',
    footerDesc: 'Nfi agbara kun ileiṣè ati isẹṣe afirika ti ko fọ oye soke lori iṣowo digital.',
    signInTitle: 'Wọlé Sínu Ibi Owo Rẹ',
    signInSubtitle: 'Tọpasẹ Nọmba Eto Oju Eko (abi Email) rọru ati Nọmba PIN Irubo Mẹrin rururu.',
    registerTitle: 'Ṣí Alaišiṣi fun Ọja Rẹ Ni Ibika',
    registerSubtitle:
      'Ko si idi lati ri Ikawe tabi Email gbo oro! Ši alaišiši laigiri pọlu Nọmba Eko Alagbeka tò 4-Digit PIN.',
    phoneLabel: 'Nọmba Eko Alagbeka (tara Email)',
    phonePlaceholder: 'e.g., 08012345678',
    phoneHelper:
      'Awọn oniwo gbogbo lẹ sọle lo nọmba fóònù alagbeko nikan. Supermarket si lo email.',
    pinLabel: 'Nọmba PIN Irubo Mẹrin Rara',
    pinPlaceholder: 'e.g., 1234 (Gẹ́gẹ́bi o ti ń se lori POS)',
    ownerNameLabel: 'Orukọ Gbagede Olopo Oja Rẹ',
    ownerNamePlaceholder: 'e.g., Mama Ngozi tabi Iyaa Wuraola',
    forgotPin: 'Ṣe o gbe PIN rẹ tabi Kpọọlẹ pamọ ni?',
    useMagicLink: 'Lo Eto Link E-mail Alarinrin',
    signInButton: 'Wọlé Ni 🚀',
    registerButton: 'Bẹrẹ Alaišiṣi Ọja Rẹ 🚀',
    noAccountYet: 'Ṣé kankán ni lori gidi roro báyé ti o jẹwẹ ibo na ri?',
    registerNowLink: 'Yi Rajista Ni Wura Ri',
    alreadyRegistered: 'Boro ni ikoje ti o ṣí alaišiši rẹ tan lati ko le wewe?',
    signInHereLink: 'Wọlé Nibayi Ni Nso',
    securityQuestionLabel: 'Ibeere Aabo (Ti o ba gbagbe PIN rẹ ni o jẹ wowo wi)',
    secretAnswerLabel: 'Idahan Siririrẹ Gidigodo',
    secretAnswerPlaceholder: 'e.g., Balogun tabi Oshodi',
    secretAnswerHelper:
      'Ni imona gẹgan de re lori idahan yi so ki o le yi PIN rorirori tabi email ra.',
    offlineNotice:
      'Ko si isimi internet lọ wọliyi. Gbogbo ìtàn si ni foju pamo lori sèlù o offline!',
    dashboard: 'Ofe Owo',
    transactions: 'Atokọ Gbogbo Iṣowo rẹ Lilo Ni Ojo Kan',
    logout: 'Jade (Sign Out)',
    noRecords: 'A gbekari ati ko si atokọ iṣowo kookan ni o wẹri lori isẹgun ri.',
    welcomeBack: 'Kaabo pada silè owo rẹ ri!',
    invTitle: 'Awọn Ọjà Tọ Wà Lọwọ Oje Ri',
    invSubtitle: 'Wò riri ọjà gbagede rẹ, oye to ń ta, pẹlu eka owo to ku lori iserere ni kiakia.',
    invAddBtn: 'FI ỌJÀ TUTU SINU ŠOOBI',
    invHistoryBtn: 'Wo Gbogbo Itan Ọjà',
    invSearchPlaceholder: 'Wa ọjà pẹlu orukọ tabi gbagede...',
    invLowStockToggle: 'Fi Ọjà tọ fẹyìn wẹ kókó sori nikan the ri',
    colItemName: 'ORUKỌ ỌJÀ RẸ NIBYI',
    colCategory: 'IKOLE / GBAGEDE NLA',
    colSellingPrice: 'OYE TỌ TỌ RỌ TA SI BÁ',
    colCostPrice: 'OWỌ RE SI BI O SE RA LO JA SORI',
    colRemainingStock: 'IYE TE RE TO WA LI SHOBI BYI BYI',
    colActions: 'ISE BI ATUNKỌ',
    btnAdjust: 'Tun iye se ri',
    btnEdit: 'Ṣatunṣe Ọjà YI RI NIKAN',
    btnDelete: 'Parẹ lera lera oja yiyi kọ kúrò njè niyi',
    invEmptyState:
      'A ko rira oja koko to jẹmọ ohun te kà nibe lẹnu yi o ti yé lera re ri mfe rọ orun kò wa soke.',
    statTotalItems: 'GBOGBO IYE ỌJÀ RI',
    unitItems: 'ọjà',
    statTotalValue: 'IYE OWO GBOGBO ỌJÀ',
    statValueSub:
      'A ṣe idan sise yi laigiri lori owo ibara ro rọ ta ja nso byi rẹ kékè mọ rọ rùn na de',
    statLowStock: 'ỌJÀ TỌ N BÙ YARA RE SOKE',
    unitAlerts: 'kékè',
    statOutOfStock: 'ỌJÀ TỌ TAN PÁTÁPÁTÁ',
    modalTitleAdd: 'Fi Oja Tuntun Kún Sinu Shoobi rẹ yi lori nkan de',
    modalTitleEdit: 'Ṣatunṣe Ikọ Ọjà Rẹ',
    fieldItemName: 'Orukọ Ọjà Rẹ',
    helperItemName:
      'Orukọ ti awọn alabobo ojà ma fi mo nkan yi mpe ro (e.g., Garri, Rice, Aso Ankara gbọrọ ko tọ re)',
    fieldCategory: 'Ẹkà Gbigba / Ikole ti tọ',
    optNewCategory: '+ Kó Ẹkà Tuntun sẹ soke mọ ri...',
    fieldSku: 'Nọmba Ọjà kika tabi Barcode kika so ri na (Bomi iṣoro ko kò)',
    fieldSellingPrice: 'Owo tita Ọjà rẹ nla nikan (Elo lo ń ta oja kan soso njẹ nnyi nkan mpe)',
    helperSellingPrice:
      'Iye owo ta mbo tà lori agbo bi kiakia fùn alabobo si nọ kán na re yi mọ jẹ ki sọ soke de',
    fieldCostPrice:
      'Owo Ti O Fi Ra Ọjà ri sọ (Elo rẹ mbe la fi ra kikan soso ti tọ niyi so ri de mọ yi ko le)',
    helperCostPrice:
      'Atí tesi re ṣakoso igberiki kiakia, ati jẹwowo ètò ìjọ fòyèriri èlọ wa ri lọ bọrọ kiakia ti tọ mbe rọ!',
    fieldUnit:
      'Báwo lase m̀bẹrẹ rò ojà yiyi ni shoobi ra rọ tọ so? (yè nkan kika rorun ti kò bọ sọ soke de ri rọ kán)',
    fieldOpeningStock: 'Melọ loni tọ ti wè n’igbale lowo lọ jọ lo yi bi ko mọ yi re nkan yi',
    helperOpeningStock: 'Iná ṣé akotun bẹ̀yì sori akoto owo rẹ̀ fun kiakia le jale nla',
    fieldLowStock:
      'Níbi iye méló lo fẹ ki a ṣe ikilo wipe o jà riri de fẹrẹ pín ti na ko tọ wé o ra nnyi',
    helperLowStock:
      'Ni ìgbà ti ó ba dinku ni de eka yii ati le gbo rò kókó jéyín ri jà gbà na so gbegun jọ riri ti tọ ra rọ',
    fieldRemarks:
      'Àlọjọ Ọjà to kù sọ nipa rẹ̀ wowo riri jù bẹyì lo (Oko soso ti ko ni lara le ki sọ mbe rọ jọ ri nkan)',
    placeholderRemarks:
      'bi ti pe a ra ta lati Alaba, iletọ agbo nọna tabi oruko alaraju kikan ri jọ nni soke nnyi rẹ de le',
    btnCancel: 'Fagilee mọ ri tọn rọ nkan re ti',
    btnSaveItem: 'Kó Ọjà pamọ sinu Shoobi ri le nkani de re',
    btnSaveChanges: 'Chebè Ayipada Rẹ kàn kiakia',
    modalTitleCategory: 'Ṣí Ikole Ọjà Tuntun sọ tọ kọrọ',
    fieldCatName:
      'Orukọ Ikole Ọjà to nwa lati fi se akosi ri de rọ nkan mọ yi ri niyi tọ kọ ri jọ mpe kò',
    placeholderCatName:
      'bábi oúnje tò dun ta ri ko le wọwo, aṣọtẹlẹ kán kán riri jọ, pọlu ata, eja wowo tabi soko tọ dun mọ ra rẹ so',
    fieldCatColor: 'Yan Àwọ̀ to daju silu ikole oja rẹ yi ti kò ku kàn ri ti tọ soke de mbe la lori',
    helperCatColor:
      'Irun awọ riri yi yo ṣí imọn de le lo kankan lorii oju eko foonu alagbeka kikan sọ mpe wowo ri nkani',
    btnSaveCategory: 'Chebè Ikole oja yiyi kọ kán na de le rọ riri so kọ bẹ yọ rọ ti rọ le gbogbo',
    modalTitleAdjust: 'Yíiye Ọjà Tọ Ti Wa Pada Si Oju Kọ kọ rọ riri njè nnyi de ta re njẹ nkan',
    currentStockText: 'Iye tọ ti wa ni igbale lọkàn gbagede riri na: {n}',
    fieldReason:
      'Idi wo ti i wá yíiyè ọjà lara byi nnyi te re njẹ nkan gbẹyin yi nkan so ri kò mpe de re?',
    reasonStockIn:
      'A ti fi Ọjà Tuntun ku sori nkan ta (Atunko oja ti e gba lójá ra ra jẹ na yi njè ko ri)',
    reasonStockOut:
      'A tọ kò ojà ita (Lo se akopo kọ tabi fun alabobo gbigbe kyauta kyauta lẹ rọ le mpe)',
    reasonDamaged:
      'Ọjà Tọ Kọ Ti Fura/baje kàn kàn njè nnyi ta ri kò le wọwo ti nkan njẹ nni so ri nkan ri mpe',
    reasonLost: 'Ọjà Tọ sonù abi enikokan ji gbé kyauta lẹ mpe ta de wọ riri',
    reasonReturn: 'Alábobo da Ọjà yi Kọ Pada wa silè ojà byi byi nkani sọ le re',
    fieldAdjustQty:
      'Méló gbagede ni tẹ fẹ jéyín ri mọ yé lera re ri oju ko sọ mbe rọ nkan na ri de mọ rọ jọ?',
    fieldAdjustCost:
      'Owo rẹ̀ tọ ra kọ tọ so bi de ri (ko kọ mbe ta ri kò de rọ mbe rọ kán nni de mpe)',
    fieldAdjustRemarks:
      'Alaye ruru/Idi rẹ ti e fi pa sọ (A gbọ fún akotun ni iṣẹ lera re ri kọ mbe rọ njẹ nkani riri na de)',
    placeholderAdjustRemarks:
      'bábi mo gbé àkọ méejị yọ ri látoṣo wè Alhaji yọ ti rọ tọ ra rọ kán de mpe ko nni le',
    btnSaveAdjustment: 'Chebè Itano Yíiyè rẹ lera re ri na de soke',
    historyTitle: 'Itan ati Àtòjọ Kọ Kọ Iṣé Ọjà gbẹyin ri sori eko gbagede ro ri nkani le re so ki',
    historySubtitle:
      'Wo itani ti gbogbo aye e fi mu ọjà wole ti won si kó o jale lẹ rọ ri mfe rọ orun kyauta njè mpe rẹ so',
    historySearchPlaceholder: 'Wa iti lori orukọ ọjà tabi alaye atunko lera re...',
    filterAllMovements: 'Wò Gbogbo Ékọ Akoto Atunko Ri Na De',
    colDate: 'OJO ATI ASIKO',
    colType: 'KIN LE HẸSAYIN',
    colQtyChange: 'IYE TỌ NI PA YI SI',
    colNewBalance: 'IYE TE KÙ NYI RI DE',
    colRemarks: 'IDI / ALAYE ATUNKE',
  },
};
