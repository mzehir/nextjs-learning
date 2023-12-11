# NextJS Öğrenme Yolundaki Karalama Defteri

_9/12/2023 günü itibariyle NextJS öğrenmeye karar verdim. Ve bu yolda rehber olarak ise NextJS dökümanını seçtim. Tabi bu demek değil ki NextJS ile ilgili diğer makale ve paylaşımları okumayacağım. Bazı noktalarda bu tür paylaşımlara da başvuracağım._

_Ayrıca bu Markdown dosyası defterin sadece 1.bölümünü oluşturacak. İhtiyaç halinde yeni markdown dosyaları da açacağım._

_Ve bu karalama defterinde notlarımı soru-cevap şeklinde tutacağım._

## 1- NextJS nedir?

NextJS, web uygulamaları oluşturma noktasında yapı taşları sağlayan bir react çerçevesidir.

## 2- Peki NextJS ne işe yarar? yada neden NextJS kullanmalıyım?

NextJS ve React.js kullanarak SSR (Server Side Rendering) işlemi yapabilen web uygulamaları geliştirebilirsin. Böylelikle SSR, performans ve SEO gibi konularda avantaj sağlar ve React.js'te yapılandırması karmaşık olan SSR işlemini NextJS ile daha basit bir şekilde yaparsın.

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

Bu sorunun cevabını verirken bilgisayarında hali hazırda zaten react ile proje geliştirildiğini ve herhangi bir kodlama editörü kullanıldığını varsayarak veriyorum.

- İlk olarak bilgisayarının nodeJS sürümünü kontrol etmelisin. Çünkü NextJS kurabilmek için mevcut nodeJS sürümünün en az **"18.17"** olması gerekir. nodeJS versiyon kontrolü için cmd ekranına aşağıdaki sorguyu yazabilirsin. Ve şayet versiyon güncellenmeye ihtiyaç varsa **[buradan](https://nodejs.org/en)** güncelleyebilirsin.

```bash
node -v
# cmd penceresi nodeJS version konrolü
```

- Artık nodeJS versiyonun uygunsa editörden NextJS projesinin oluşturalacağı dosya yolunu seçmelisin ve editör termineline aşağıdaki komutu yazmalısın.

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

Dökümanda iki seçenek için yapılan açıklamalar belirleyici bir rol oynamasada, bu noktada iki farklı seçenek için iki faklı proje ile yola devam edebilirsin. Sonuçta bu bir "NextJS Öğrenme Yolundaki Karalama Defteri".

Ayrıca bu soru ile ilgili hemen aşağıda paylaştığım yazıları ve tartışmaları da incelenebilirsin.

- [stackoverflow](https://stackoverflow.com/questions/76570208/what-is-different-between-app-router-and-pages-router-in-next-js)
- [reddit](https://stackoverflow.com/questions/76570208/what-is-different-between-app-router-and-pages-router-in-next-js)
- [linkedin](https://www.linkedin.com/pulse/exploring-evolution-nextjs-13-app-router-vs-page-louis-nwadike/)
- [medium](https://medium.com/@jawaragordon/choose-your-own-adventure-next-js-app-vs-pages-router-528dbf25b37f)

## 7- Evet şu anda App Router için 1 proje ve Page Router için 1 proje oluşturdum. Ve şimdi bu projeleri bilgisayarımda nasıl çalıştırabilirim?

Bu projeleri bilgisayarında çalıştırabilmek için çalıştırmak istediğin projenin ana dizinini, editör(VSCode gibi) ile açman gerekir. Daha sona editör terminalinde aşağıdaki komutu çalıştırmalısın. Komut çalıştırıldıktan kısa bir süre sonra varsayılan port değiştirilmediyse proje "http://localhost:3000/" portunda çalışacaktır.

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

- Burada **page.js** ve **layout.js** projenin kök kısmını temsil eder. "http://localhost:3000/" gibi...
- **page.js** dosyası "http://localhost:3000/" deki çıktının karşılığıdır.

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

- Burada **index.js** projenin kök kısmını temsil eder. "http://localhost:3000/" gibi...
- Ekrandaki çıktının karşılığı yine **index.js** dosyasındadır.

### App Router - "about" route oluşturma ("http://localhost:3000/about" gibi)

- Böyle bir route oluşturmak için `src/app/` dizininin içerisine **about** adında klasör açmalısın. Klasör adı ya camelCase ya da kebap-case formatında olmalıdır. Ayrıca url'deki path kısmı dosya adına karşılık gelir.
- Daha sonra**about** klasörünün içerisine de **page.js** adında bir dosya açmalısın ve bu dosyanın içerisini ihtiyacın doğrultusunda doldurmalısın.

### Page Router - "about" route oluşturma ("http://localhost:3000/about" gibi)

- Böyle bir route oluşturmak için iki farklı yöntem vardır.
  - Birinci yöntem: `src/pages/` dizini içerisine **about.js** adında bir dosya açmalısın ve bu dosya içerisini ihtiyacın doğrultusunda doldurmalısın. Dosya adı ya camelCase ya da kebap-case formatında olmalıdır. Ayrıca url'deki path kısmı dosya adına karşılık gelir.
  - İkinci yöntem: `src/pages/` dizini içerisine **about** adında bir klasör açmalısın ve bu klasör içerisine **index.js** adında dosya açmalısın ve bu dosya içerisini ihtiyacın doğrultusunda doldurmalısın. Klasör adı ya camelCase ya da kebap-case formatında olmalıdır. Ayrıca url'deki path kısmı dosya adına karşılık gelir.

## 9- Her iki proje için "about" adında route oluşturduktan sonra yine her iki proje için "contact" adında route oluşturdum. Ve route'lere ait path'leri url kısmına yazdığımda yönlendirme gerçekten başarılı. Fakat ben bu noktada "about" sayfasındaysam bir button olsun, butona bastığımda "contact" sayfasına gideyim. "contact" sayfasındaysam yine bir buton olsun ve butona bastığımda "about" sayfasına gideyim. Bunu nasıl yapabilirim? Bunun standartı nedir?

Next.js'de rotalar arasında gezinmenin iki yolu vardır:

- **Link** bileşenini kullanma
- **userRouter** hook'unu kullanma
- **[Daha detaylı bilgi için tıkla ](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)**

### Link bileşeni ne zaman kullanılmalıdır? Nasıl kullanılır?

- Sayfalar arasında gezinmelerde kullanılabilir.
- Daha hızlı gezinme sağlamak için kullanılabilir.
- Örnek kullanım aşağıdadır.

```jsx
import Link from "next/link";

export default function Contact() {
  return <Link href="/about">Go to about page</Link>;
}
```

### userRouter hook'u ne zaman kullanılmalıdır? Nasıl kullanılır?

- Bir olayın tetiklenmesi veya bir formun gönderilmesi durumunda sayfa değiştirmek istediğinizde kullanabilirsiniz.
- Bağlantı oluşturmak yerine sayfa değiştirmenin gerektiği durumlarda kullanabilirsiniz.
- Örnek kullanım aşağıdadır.

```jsx
"use client";

import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push("/contact")}>
      Go to contact page
    </button>
  );
}
```

## 10- Evet yönlendirmeler istediğim gibi çalışıyor. Fakat şu anda "users" adında bir sayfa yapmak istiyorum. Bu sayfada bir liste göstereceğim. Ve liste satırlarında her satır için buton olacak ve ben herhangi bir satırın butonuna tıkladığım zaman "http://localhost:3000/users/userId" sayfasına gitmek istiyorum. Buradaki "userId" yerinde, tıkladığım satırdaki kullanıcının id'si yazmalı. Aslında benim burada sormak istediğim dinamik bir route nasıl oluşturabilirim? Ve böyle bir durumda yönlendirme işlemini nasıl yapabilirim?

Bu sorunun cevabını adım adım cevaplandırmak lazım. Öncelikle yapacaklarımızı sıralayalım.

- 1- Öncelikle **users** adında bir sayfa oluşturmalısın.

  Bunun için `src/app` dizinine **users** adında bir klasör açalım. Daha sonra **users** klasörü içerisine **page.js** adında bir dosya açalım. (Zaten buraya kadar olan kısmı öğrenmiştik.) Daha sonra bu dosyanın içerisine aşağıdaki kod bloğunu ekleyelim. Ya da kendi ihtiyacımız doğrultusunda dolduralım

  ```jsx
  // src/app/users/page.js
  "use client";

  import React from "react";
  import Link from "next/link";

  let usersData = [
    {
      id: "1000001",
      name: "Mümin",
      surname: "Zehir",
    },
    {
      id: "1000002",
      name: "Ahmet Faruk",
      surname: "Turgut",
    },
  ];

  const Users = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <h1>App Router Users Page</h1>

        <br />

        <table style={{ border: "1px solid white" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid white", padding: "50px" }}>
                Name
              </th>
              <th style={{ border: "1px solid white", padding: "50px" }}>
                Surname
              </th>
              <th style={{ border: "1px solid white", padding: "50px" }}>*</th>
            </tr>
          </thead>

          <tbody>
            {usersData.map((item, index) => (
              <tr key={index.toString()}>
                <th style={{ border: "1px solid white" }}>{item.name}</th>
                <th style={{ border: "1px solid white" }}>{item.surname}</th>
                <th style={{ border: "1px solid white", padding: "50px" }}>
                  <Link
                    href={`/users/${item.id}`}
                    className="bg-green-400 w-fit rounded-lg p-4"
                  >
                    Detaya git
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default Users;
  ```

  Yukarıdaki kod bloğunu görüntüleyebilmek için adres çubuğuna "http://localhost:3000/users" yazman yeterlidir. Ve sorduğun sorudaki "http://localhost:3000/users/userId" yolunun _users_ kısmını tamamlamış olduk. Şimdi gelelim dinamik route olan _userId_ path'inin yapımına.

- 2- `src/app/users/` dizinine **[userId]** adında bir klasör açalım. Ve klasör ismini gerçekten köşeli parantez ile yaz. Daha sonra oluşturduğumuz klasör içerisine **page.js** adında bir dosya açalım. Daha sonra bu dosyanın içerisine aşağıdaki kod bloğunu ekleyelim. Ya da kendi ihtiyacımız doğrultusunda dolduralım.

  ```jsx
  "use client";

  import React from "react";

  const UserDetail = (props) => {
    console.log(props);

    return <div>UserDetail</div>;
  };

  export default UserDetail;
  ```

Yukarıdaki talimatları izleyerek kullanıcıların listelendiği ve belirli bir kullanıcının detaylarının gösterildiği sayfaları yapmak aslında bu kadar kolay. Ayrıca **UserDetail** bileşeninde konsola yazılan props değerini incelemekte fayda var. Bu konu ile alakalı daha detaylı bilgi için aşağıdaki websitelerini ziyaret edebilirsin.

- [nextjs - dynamic-routes](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)
- [nextjs - linking-and-navigating](https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating)
- [nextjs - page](https://nextjs.org/docs/app/api-reference/file-conventions/page)
- [stackoverflow](https://stackoverflow.com/questions/74570835/how-to-do-dynamic-routes-with-nextjs-13)

## 11- Hemen yukarıdaki soru için verdiğin cevap **app router** için geçerli sanırım. Ben aynı işlemleri **page router** ile nasıl yapacağım?

Aslında bu soruya verilecek olan cevap yukarıdaki soruya verilen cevapla hemen hemen aynı. Ama farklılıklarda var.

- 1- İlk olarak `src/pages` dizinine **users** adında bir klasör açalım. Daha sonra **users** klasörü içerisine **index.js** adında bir dosya açalım. (Zaten buraya kadar olan kısmı öğrenmiştik.) Daha sonra bu dosyanın içerisine aşağıdaki kod bloğunu ekleyelim. Ya da kendi ihtiyacımız doğrultusunda dolduralım.

  ```jsx
  // src/pages/users/index.js
  "use client";

  import React from "react";
  import Link from "next/link";

  let usersData = [
    {
      id: "1000001",
      name: "Mümin",
      surname: "Zehir",
    },
    {
      id: "1000002",
      name: "Ahmet Faruk",
      surname: "Turgut",
    },
  ];

  const Users = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <h1>Page Router Users Page</h1>

        <br />

        <table style={{ border: "1px solid white" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid white", padding: "50px" }}>
                Name
              </th>
              <th style={{ border: "1px solid white", padding: "50px" }}>
                Surname
              </th>
              <th style={{ border: "1px solid white", padding: "50px" }}>*</th>
            </tr>
          </thead>

          <tbody>
            {usersData.map((item, index) => (
              <tr key={index.toString()}>
                <th style={{ border: "1px solid white" }}>{item.name}</th>
                <th style={{ border: "1px solid white" }}>{item.surname}</th>
                <th style={{ border: "1px solid white", padding: "50px" }}>
                  <Link
                    href={`/users/${item.id}`}
                    className="bg-green-400 w-fit rounded-lg p-4"
                  >
                    Detaya git
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default Users;
  ```

- 2- Daha sonra `src/pages` dizinine **[userId].js** adında bir dosya açalım. Ve dosyanın içerisine aşağıdaki kod bloğunu ekleyelim. Ya da kendi ihtiyacımız doğrultusunda dolduralım.

  ```jsx
  import React from "react";
  import { useRouter } from "next/router";

  const UserDetail = () => {
    const router = useRouter();

    console.log(router);

    return <div>Page Router - User detail</div>;
  };

  export default UserDetail;
  ```

İşte yukarıdaki gibi **page router** ile dinamik bir rota oluşturmuş ve görüntülemesini yapmış oluruz. Eğer 10.sorunun cevabındaki gibi **UserDetail** bileşenini dinamik klasör içerisinde oluştumak istersek, users klasörü içerisine **userId** adında bir klasör açmalıyız. Bu klasörün içerisine **index.js** adında bir dosya açmalıyız. Daha sonra yukarıdaki kodlamaları **index.js** dosyası içerisine yazmalıyız.
