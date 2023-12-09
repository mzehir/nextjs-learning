# NextJS Öğrenme Yolundaki Karalama Defteri

_9/12/2023 günü itibariyle NextJS öğrenmeye karar verdim. Ve bu yolda rehber olarak ise NextJS dökümantasyonunu seçtim. Tabi bu demek değil ki NextJS ile ilgili diğer makale ve paylaşımları okumayacağım. Bazı noktalarda bu tür paylaşımlara da başvuracağım._

_Ayrıca bu Markdown dosyası defterin sadece 1.bölümünü oluşturacak. Burada "konuya giriş" ile ilgili notlar yazacağım. Belki planlama notlarıda buraya yazabilirim._

_Bu bölümdeki notlarımı soru-cevap şeklinde tutayım._

## 1- NextJS nedir?

NextJS, web uygulamaları oluşturma noktasında yapı taşları sağlayan bir react çerçevesidir.

## 2- Peki NextJS ne işe yarar? yada neden NextJS kullanmalıyım?

NextJS ve React.js kullanarak SSR (Server Side Rendering) işlemi yapabilen web uygulamaları geliştirebilir. Böylelikle SSR, performans ve SEO avantajları sağlar ve React.js'te yapılandırması karmaşık olan SSR işlemini NextJS basitleştirir.

## 3- Peki SSR(Server Side Rendering) ve CSR(Client Side Rendering) nedir?

CSR (Client Side Rendering): Kullanıcı tarayıcısında kodun çalıştırılmasıdır. İlk yükleme sırasında performans sorunları, beklemeler ve en önemlisi SEO eksiklikleri olabilir. Daha detaylı anlatım yorum satırı olarak bulunmaktadır.

<!-- *CSR: yazılan kodların kullanıcı tarafında render edilmesi anlamına gelir.
Bu yöntemde sunucu tarafına istek gönderilir ve ardından JS dosyası browser tarafından okunur.  Okunma işleminin ardından uygulama kullanıcıya ulaşmış olur ama bu yükleme sırasında kullanıcı bekletilir.
JS yüklendikten sonra ise SPA (Single Page Application) şeklinde çalışmaya başlar. Code splitting yapılmaz ve daha da önemlisi arama motorları açısından olmazsa olmaz olan meta etiketleri okunamaz.
İlk yükleme esnasında belirlenen meta bilgileri okunur ve diğer geçiş yapılan sayfalar tekrar render edilmediği için sabit bir title ve description bilgisine sahip olunur ki bu da arama motorları için büyük bir eksik.
Eğer yönetim paneli benzeri bir uygulama yazmıyorsanız bu çalışma mantığı pek de uygun değil. -->

SSR (Server Side Rendering): Sunucu tarafında kodun çalıştırılmasıdır. Performans ve SEO avantajları sunar. Daha detaylı anlatım youm satırı olarak bulunmaktadır.

<!-- *SSR: yazılan kodların sunucu tarafında render edilmesi anlamına gelir.
Kullanıcının sayfalar için yapmış olduğu istekler sunucu tarafından alınır, ardından render edilir ve render edilmiş veri kullanıcıya aktarılır.
Bu sayede hem performans açısından kazanım sağlarken diğer yandan dinamik meta etiketleri ile uygulamanın arama motorları tarafından okunabilir olmasını sağlamış olunur. -->

## 4- Gerçekten ikna oldum. Peki şu anda yerel bilgisayarımda bir NextJS projesini nasıl başlatırım?

Bu sorunun cevabını verirken yerel bilgisayarda hali hazırda zaten react ile proje geliştirildiğini ve herhangi bir kodlama editörü kullanıldığını varsayarak veriyorum.

- İlk olarak yerel makinanın nodeJS sürümü kontrol edilmeli. Çünkü NextJS kurabilmek için mevcut nodeJS sürümünün en az **"18.17"** olması gerekir. nodeJS versiyon kontrolü için cmd ekranına aşağıdaki sorgu yazılabilir. Ve şayet versiyon güncellenmeye ihtiyaç varsa **[buradan](https://nodejs.org/en)** güncellenebilir.

```bash
node -v
# cmd penceresi nodeJS version konrolü
```

- Artık nodeJS versiyonu uygunsa editörden NextJS projesinin oluşturalacağı dosya yolu seçilmeli ve editör termineline aşağıdaki komut yazılmalıdır.

```bash
npx create-next-app@latest
# NextJS otomatik kurulum için komut - npm ile
```

## 5- Dediğin gibi NextJS kurulumu için komutu çalıştırdım. Fakat cevap vermem gereken bazı sorular soruldu. Nasıl ilerlemeliyim?

Evet çok doğru, yukarıdaki komut çalıştırıldıktan sonra klasör ve proje yapılandırma noktasında bu sorulara cevap verilmesi gerekir. Tabi bu yapılandırma daha sonra değiştirilebilir. Ama böyle olması ciddi anlamda zaman kazandırır. Şimdi aşağıda sorulan sorulara bir bakalım.

- **What is your project named?** => Burada projeye verilecek ismin 1 kelimeden fazla ise "kebap-case" kullanılması önerilir.
- **Would you like to use TypeScript?** => Kişisel ve proje bazlı bir karar gerektirir. Ama öğrenme aşamasında TS'e aşinalı yok ise "No" demek mantıklıdır.
- **Would you like to use ESLint?** => Kişisel ve proje bazlı bir karar gerektirir.
- **Would you like to use Tailwind CSS?** => Kişisel ve proje bazlı bir karar gerektirir.
- **Would you like to use `src/` directory?** => Proje bazlı bir karar gerektirir.
- **Would you like to use App Router? (recommended)** => Proje bazlı bir karar gerektirir.
- **Would you like to customize the default import alias (@/\*)?** => Kişisel bir karar gerektirir.

## 6- Hepsi tamam. Fakat App Router ve Pages Router nedir? Bunu basit bir şekilde açıklar mısın? Detaylandırmakta fayda var diye düşünüyorum.

Evet haklısın bu konu bir çok kişinin kafasının karıştığı, kararsız kaldığı yer. Öncelikle bu ayrım ile alakalı resmi dökümanlarda ne yazıyor, ona bakmak lazım.

### App Router

> Next.js Uygulama Yönlendiricisi, React'in en yeni özelliklerini kullanarak uygulama oluşturmaya yönelik yeni bir paradigmadır. Next.js'ye zaten aşina iseniz, Uygulama Yönlendiricisinin, Sayfa Yönlendiricisindeki mevcut dosya sistemi tabanlı yönlendiricinin doğal bir evrimi olduğunu göreceksiniz.
> [Kaynak için tıkla](https://nextjs.org/docs/app)

### Page Router

> Next.js 13'ten önce Pages Router, Next.js'de rota oluşturmanın ana yoluydu. Her dosyayı bir rotaya eşlemek için sezgisel bir dosya sistemi yönlendiricisi kullandı. Pages Router, Next.js'nin daha yeni sürümlerinde hala desteklenmektedir ancak React'in en yeni özelliklerinden yararlanmak için yeni Page Router'a geçmenizi öneririz.
> [Kaynak için tıkla](https://nextjs.org/docs/pages)

### Sonuç

Dökümanda iki seçenek için yapılan açıklamalar belirleyici bir rol oynamasda, bu noktada iki farklı seçenek için iki faklı proje ile yola devam edilebilir. Sonuçta bu bir "NextJS Öğrenme Yolundaki Karalama Defteri".

Ayrıca bu soru ile ilgili hemen aşağıda paylaştığım yazılar ve tartışmalar incelenebilir.

- [stackoverflow](https://stackoverflow.com/questions/76570208/what-is-different-between-app-router-and-pages-router-in-next-js)
- [reddit](https://stackoverflow.com/questions/76570208/what-is-different-between-app-router-and-pages-router-in-next-js)
- [linkedin](https://www.linkedin.com/pulse/exploring-evolution-nextjs-13-app-router-vs-page-louis-nwadike/)
- [medium](https://medium.com/@jawaragordon/choose-your-own-adventure-next-js-app-vs-pages-router-528dbf25b37f)

<!-- Kişisel yorum -->

_Evet! neredeyse ilk bölümün sonuna geldim ve bu noktadan sonra 2 farklı proje ve bu projelerde "about" adında bir router oluşturayım. Aynı zamanda bu işlemleri yaparken küçük notlar almaya devam edeyim._

_Gün Sonu_

<!-- Kişisel yorum -->
