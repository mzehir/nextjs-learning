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

<!-- Kişisel yorum -->

<!-- Kişisel yorum -->

## 7- Evet şu anda App Router için 1 proje ve Page Router için 1 proje oluşturdum. Ve şimdi bu projeleri bilgisayarımda nasıl çalıştırabilirim?
Bu projeleri çalıştırabilmek için çalıştırmak istenilen projenin ana dizinini editör(VSCode gibi) ile açmak gerekir. Daha sona editör teminaline aşağıdaki komut yazılmalıdır. Komut çalıştırıldıktan kısa bir süre sonra varsayılan port değiştiilmediyse proje "http://localhost:3000/" portunda çalışacaktır.

```bash
npm run dev   
# NextJS projesini http://localhost:3000/ portunda çalıştırmak için - npm ile
```

## 8- İki farklı projeyide çalıştırdım. Ve şimdi iki proje için ayrı ayrı "about" adında bir route oluşturmak istiyorum. Bunu nasıl yapabilirim?

Bu soruya cevap vermeden önce 2 projeninde, proje oluşturulduktan sonraki `src/` dizinindeki başlangıç klasör ve dosyalarını inceleyelim.

### App Router - başlangıçta `src/` dizini
```
src/
├─ app/
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
```
- Burada page.js ve layout.js projenin kök kısmını temsil eder. "http://localhost:3000/" gibi...
- Özellikle page.js dosyası "http://localhost:3000/" deki çıktının karşılığıdır.

### Page Router - başlangıçta `src/` dizini
```
src/
├─ pages/
│  ├─ api/
│  ├─ _app.js
│  ├─ _document.js
│  ├─ index.js
├─ styles/
│  ├─ globals.css
```
- Burada index.js projenin kök kısmını temsil eder. "http://localhost:3000/" gibi...
- Ekrandaki çıktının karşılığı yine index.js dosyasındadır.

### App Router - "about" route oluşturma ("http://localhost:3000/about" gibi)
- Böyle bir route oluşturmak için `src/app/` dizininin içerisine __about__ adında klasör açılmalı. Klasör adı ya camelCase ya da kebap-case formatında olmalıdır. Ayrıca url'deki path kısmı dosya adına karşılık gelir.
- __about__ klasörünün içeriside de __page.js__ adında bi dosya açılmalı ve bu dosya içerisi gereklilik doğrultusunda doldurulmalı.

### Page Router - "about" route oluşturma ("http://localhost:3000/about" gibi)
- Böyle bir route oluşturmak için iki farklı yöntem bulunur.
  - Birinci yöntem: `src/pages/` dizini içerisine  __about.js__ adında bir dosya açılmalı ve bu dosya içerisi gereklilik doğrultusunda doldurulmalıdır. Dosya adı ya camelCase ya da kebap-case formatında olmalıdır. Ayrıca url'deki path kısmı dosya adına karşılık gelir.
  - İkinci yöntem: `src/pages/` dizini içerisine içerisine __about__ adında bir klasör açılmalı ve bu klasör içerisine __index.js__ adında dosya açılmalı ve bu dosya içerisi gereklilik doğrultusunda doldurulmalıdır. Klasör adı ya camelCase ya da kebap-case formatında olmalıdır. Ayrıca url'deki path kısmı dosya adına karşılık gelir.

## 9- Her iki proje için "about" adında route oluşturduktan sonra yine her iki proje için "contact" adında route oluşturdum. Ve route'lere ait path'leri url kısmına yazdığımda yönlendirme gerçekten başarılı. Fakat ben bu noktada "about" sayfasındaysam bir button olsun, butona bastığımda "contact" sayfasına gideyim. "contact" sayfasındaysam yine bir buton olsun ve butona bastığımda "about" sayfasına gideyim. Bunu nasıl yapabilirim? Bunun standartı nedir? 
Next.js'de rotalar arasında gezinmenin iki yolu vardır:

- __Link__ bileşenini kullanma
- __userRouter__ hook'unu kullanma
- **[Daha detaylı bilgi için tıkla ](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)**

### Link ne zaman kullanılmalı? Nasıl kullanılır?
- Sayfalar arasında gezinmelerde kullanılabilir.
- Daha hızlı gezinme sağlamak için kullanılabilir.
- Örnek kullanım aşağıdadır.

```jsx
import Link from 'next/link'
 
export default function Contact() {
  return <Link href="/about">Go to about page</Link>
}
```

### userRouter ne zaman kullanılmalı?
- Bir olayın tetiklenmesi veya bir formun gönderilmesi durumunda sayfa değiştirmek istediğinizde kullanılabilir.
- Bağlantı oluşturmak yerine sayfa değiştirmenin gerektiği durumlarda kullanışlıdır.
- Örnek kullanım aşağıdadır.

```jsx
'use client';

import { useRouter } from 'next/navigation'
 
export default function About() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/contact')}>
      Go to contact page
    </button>
  )
}
```
