import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, Clock, ChevronLeft, Share2, Tag, BookOpen } from "lucide-react";
import { motion } from "motion/react";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=100&w=2560&auto=format&fit=crop";

const postsData: Record<string, any> = {
  "bugday-sulamasi-ne-zaman-yapilir-2026-rehberi": {
    title: "Buğday Sulaması Ne Zaman Yapılır? 2026 Rehberi",
    date: "3 Mayıs 2026",
    author: "Ahmet Kaya",
    readTime: "12 dk okuma",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=100&w=2560&auto=format&fit=crop",
    category: "Bitki Besleme",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic">
          Buğday tarımında verimi belirleyen en kritik faktör doğru zamanda yapılan sulamadır. 2026 yılında değişen iklim koşulları ve artan su maliyetleri göz önüne alındığında, FAO metodolojisi ile modern buğday sulama kararları her zamankinden daha hayati bir önem taşıyor.
        </p>

        <h2 className="text-3xl mt-12 mb-6">Giriş: Buğday Su İhtiyacı Neden Önemlidir?</h2>
        <p>
          Buğday, dünyada ve Türkiye'de gıda güvenliğinin temel taşıdır. Ancak buğdayın verim potansiyeline ulaşması, toprakta bulunan nemin bitkinin gelişim evrelerine uygun şekilde yönetilmesine bağlıdır. <strong>Buğday sulama</strong> stratejisi, sadece su vermek değil, bitkinin "su stresine" girmesini önleyerek tane dolumunu optimize etmektir.
        </p>
        <p>
          2026 yılı tarım sezonu, artan kuraklık riskleri ve düzensiz yağış rejimleri ile karakterize edilmektedir. Bu rehberde, bilimsel veriler ışığında buğdayın hangi evrede ne kadar suya ihtiyaç duyduğunu ve FAO standartlarına göre nasıl planlama yapılması gerektiğini detaylandıracağız.
        </p>

        <h2 className="text-3xl mt-12 mb-6">Buğdayın Kritik Gelişim Dönemleri ve Sulama Zamanı</h2>
        <p>
          Buğday bitkisi, yaşam döngüsü boyunca farklı miktarlarda suya ihtiyaç duyar. Bazı dönemlerde su eksikliği verimi %50'ye kadar düşürebilirken, bazı dönemlerde sulama yapmak gereksiz maliyet oluşturabilir. İşte buğdayın 4 kritik sulama dönemi:
        </p>

        <h3 className="text-2xl mt-8 mb-4">1. Kardeşlenme Dönemi (Tiller Stage)</h3>
        <p>
          Tohumun çimlenmesinden sonra bitkinin yan sürgünler verdiği bu dönem, kök sisteminin güçlendiği zamandır. Eğer bu dönemde şiddetli bir kuraklık varsa, bitki yeterli kardeş yapamaz. Kardeşlenme başında yapılacak sulama, birim alandaki başak sayısını doğrudan artırır. 
        </p>

        <h3 className="text-2xl mt-8 mb-4">2. Sapa Kalkma Dönemi (Jointing Stage)</h3>
        <p>
          Bitkinin boy attığı ve vegetatif aksamın hızla geliştiği bu evre, en yüksek su tüketiminin başladığı dönemdir. Bitki bu dönemde su stresine girerse, sapa kalkma kısalır ve başak büyüklüğü olumsuz etkilenir.
        </p>

        <h3 className="text-2xl mt-8 mb-4">3. Başaklanma ve Çiçeklenme Dönemi (Heading & Flowering)</h3>
        <p>
          <strong>En kritik dönemdir.</strong> Başakların kından çıktığı ve çiçeklenmenin olduğu bu süreçte su noksanlığı, polen kısırlığına ve dolayısıyla başaktaki tane sayısının azalmasına neden olur. Toprak neminin bu dönemde tarla kapasitesinin %60-70'inden aşağı düşmemesi gerekir.
        </p>

        <h3 className="text-2xl mt-8 mb-4">4. Süt Olum Dönemi (Milk Stage)</h3>
        <p>
          Tanenin içinin dolduğu evredir. Bu dönemdeki sulama, bin tane ağırlığını ve hektolitre değerini artırır. Tanenin dolgun ve parlak olması için bu aşamadaki toprak nemi hayatiyet arz eder. Sarı olum dönemine geçildiğinde ise sulama kesilmelidir.
        </p>

        <h2 className="text-3xl mt-12 mb-6">FAO Penman-Monteith Metodolojisi ve Hassas Sulama</h2>
        <p>
          Birleşmiş Milletler Gıda ve Tarım Örgütü (FAO) tarafından önerilen Penman-Monteith denklemi, bitkinin terleme (transpirasyon) ve toprağın buharlaşma (evaporasyon) toplamı olan **Evapotranspirasyonu (ETc)** hesaplamak için kullanılır.
        </p>
        <p>
          Bu metodoloji; sıcaklık, nem, rüzgar hızı ve güneşlenme radyasyonu gibi verileri birleştirir. Buğday için bu hesaplama yapılırken bitki katsayısı (Kc) kullanılır. Erken dönemlerde Kc düşüktür (0.3-0.4), ancak başaklanma evresinde 1.15'e kadar çıkar. Yani buğday, çiçeklenme döneminde referans buharlaşmanın %15 daha fazlasını tüketme eğilimindedir.
        </p>

        <div className="bg-[var(--green-light)] p-8 rounded-[32px] my-10 border-2 border-[var(--green-mid)]/20 shadow-sm">
           <h4 className="text-xl font-black mb-4">Profesyonel İpucu:</h4>
           <p className="text-[var(--green-dark)] font-bold mb-0">
             "Tarım Sulama Hesaplayıcı" uygulamamız, bulunduğunuz bölgenin günlük meteorolojik verilerini FAO Penman-Monteith formülü ile işleyerek tarlanızın bugün kaç mm suya ihtiyacı olduğunu size söyler. Tahmin yollarını bırakın, bilimi kullanın.
           </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6">Mevsim Tavsiyeleri ve İklim Etkisi</h2>
        <h3 className="text-2xl mt-8 mb-4">İlkbahar Sulaması</h3>
        <p>
          Anadolu gibi kışları yağışlı, ilkbaharları kurak geçen bölgelerde ilk sulama genellikle Nisan ortası veya Mayıs başında (bölgelere göre değişir) sapa kalkma döneminde yapılır. Eğer Mart ayı çok kurak geçmişse, kardeşlenme sulaması da gerekebilir.
        </p>
        <h3 className="text-2xl mt-8 mb-4">Gece Sulamasının Avantajları</h3>
        <p>
          Güneşın kavurucu etkisinin olmadığı gece ve sabahın erken saatlerinde yapılan sulama, suyun evaporasyon yoluyla kaybolmasını %30'a kadar azaltır. Ayrıca bitkinin suyu absorbe etmesi için daha uzun bir serinlik süresi sağlar.
        </p>

        <h2 className="text-3xl mt-12 mb-6">Toprak Yapısı ve Su Miktarı</h2>
        <p>
          Ne kadar su verileceği toprağın su tutma kapasitesine bağlıdır:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Kumlu Topraklar:</strong> Suyu hızla sızdırır. Az miktarda ama sık aralıklarla sulanmalıdır.</li>
          <li><strong>Tınlı (Orta) Topraklar:</strong> İdeal topraklardır. Buğday için en iyi verim bu topraklarda alınır.</li>
          <li><strong>Killi Topraklar:</strong> Suyu çok iyi tutar ancak havalanması zordur. Fazla su (göllenme) bitki köklerini çürütebilir.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6">2026 Öngörüleri: Akıllı Tarımın Önemi</h2>
        <p>
          2026 sezonu için yapılan tahminler, sıcaklık ortalamalarının mevsim normallerinin 1.5 derece üzerinde olacağını gösteriyor. Bu durum, bitkinin terleme hızını artıracak ve sulama aralıklarını kısaltacaktır. Sensör teknolojileri ve mobil hesaplama araçları bu yıl çiftçinin en büyük yardımcısı olacaktır.
        </p>
        <p>
          Doğru sulama sadece verimi artırmaz, aynı zamanda yeraltı su kaynaklarımızın korunmasını sağlar. Gelecek nesillere verimli topraklar bırakmak için her damlanın hesabını yapmalıyız.
        </p>

        <h2 className="text-3xl mt-12 mb-6">Sonuç</h2>
        <p>
          Özetle; buğday sulama zamanı planlanırken takvime değil, bitkinin fenolojik evresine ve toprağın nem durumuna bakılmalıdır. Sapa kalkma ve çiçeklenme dönemlerini susuz bırakmamak, 2026 yılında başarılı bir hasat yapmanın anahtarıdır.
        </p>
        <p>
          Daha detaylı hesaplamalar ve bitki spesifik tavsiyeler için ana sayfamızdaki hesaplama aracını kullanmayı unutmayın. Bol bereketli bir sezon dileriz!
        </p>
      </div>
    )
  },
  "domates-icin-damla-sulama-rehberi": {
    title: "Domates İçin Damla Sulama Rehberi",
    date: "5 Mayıs 2026",
    author: "Ahmet Kaya",
    readTime: "15 dk okuma",
    image: "https://images.unsplash.com/photo-1591857177580-dc3121bfe267?q=100&w=2560&auto=format&fit=crop",
    category: "Sulama Teknikleri",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic">
          Domates yetiştiriciliğinde su, meyvenin hem miktarını hem de kalitesini belirleyen en temel girdidir. "Domates damla sulama" sistemleri, bitkinin kök bölgesine kontrollü su vererek hem verimi artırır hem de su israfını önler.
        </p>

        <h2 className="text-3xl mt-12 mb-6">Giriş: Domates Neden Damla Sulama İster?</h2>
        <p>
          Domates bitkisi, düzensiz sulamaya karşı oldukça hassastır. Klasik salma sulama yöntemleri, kök bölgesinde aşırı nemlenmeye ve ardından hızlı kurumaya neden olur. Bu durum meyvelerde çatlamaya ve çiçek burnu çürüklüğü gibi fizyolojik hastalıklara yol açar. <strong>Domates damla sulama</strong> yöntemi, toprak nemini sürekli ideal seviyede tutarak bitkinin stres yaşamasını engeller.
        </p>

        <h2 className="text-3xl mt-12 mb-6">Gelişim Evrelerine Göre Domates Sulama Planı</h2>
        <p>
          Domatesin su tüketimi, büyüme hızına ve meyve yüküne paralel olarak değişim gösterir. İşte evre evre sulama stratejileri:
        </p>

        <h3 className="text-2xl mt-8 mb-4">1. Fide Dönemi ve Şaşırtma Sonrası</h3>
        <p>
          Fideler toprağa dikildikten sonra verilen "can suyu" hayati önem taşır. Bu aşamada toprağın nemli tutulması ancak aşırı sulanmaması gerekir. Aşırı su, köklerin tembelleşmesine ve yüzeyde kalmasına neden olur. Az miktarda ama düzenli su vererek köklerin derine inmesi teşvik edilmelidir.
        </p>

        <h3 className="text-2xl mt-8 mb-4">2. Çiçeklenme Dönemi</h3>
        <p>
          İlk çiçek salkımları göründüğünde su ihtiyacı artar. Ancak bu dönemde yapılacak aşırı sulama, bitkinin vegetatif (boya) kaçmasına ve çiçek dökmesine neden olabilir. Toprak nemi dengeli tutulmalı, bitkinin gün ortasında pörsümesine izin verilmemelidir.
        </p>

        <h3 className="text-2xl mt-8 mb-4">3. Meyve Bağlama ve Büyüme Dönemi</h3>
        <p>
          <strong>Su tüketiminin zirve yaptığı dönemdir.</strong> Meyveler ceviz büyüklüğüne ulaştıktan sonra su ihtiyacı maksimuma çıkar. Bu dönemde yapılacak bir aksama, meyvelerin küçük kalmasına veya içlerinin boş olmasına neden olur. Günlük su tüketimi, hava sıcaklığına bağlı olarak bitki başına 3-7 litreye kadar çıkabilir.
        </p>

        <h3 className="text-2xl mt-8 mb-4">4. Olgunlaşma ve Hasat Dönemi</h3>
        <p>
          Meyveler kızarmaya başladığında sulama sıklığı hafifçe azaltılmalıdır. Bu, meyvedeki şeker oranını (Brix) artırır ve meyveden gelen aromanın güçlenmesini sağlar. Ancak hasat süresince bitkinin tamamen kurumasına asla izin verilmemelidir.
        </p>

        <h2 className="text-3xl mt-12 mb-6">Günlük Su İhtiyacı ve Hesaplama</h2>
        <p>
          Domatesın günlük su ihtiyacı hesaplanırken; bitkinin büyüklüğü, güneşlenme süresi ve toprak yapısı dikkate alınmalıdır. Genel bir kural olarak:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Serin Günler:</strong> Bitki başına 1.5 - 2.5 Litre/gün</li>
          <li><strong>Sıcak Yaz Günleri:</strong> Bitki başına 4 - 6 Litre/gün</li>
          <li><strong>Sıcak ve Rüzgarlı Günler:</strong> Bitki başına 7 Litre ve üzeri</li>
        </ul>
        <p>
          Ancak bu rakamlar geneldir. Kesin sonuç için <strong>FAO Penman-Monteith</strong> formülü kullanılmalıdır. Hesaplayıcımız, bölgenizdeki buharlaşma hızını (ETo) alarak domates katsayısı (Kc) ile çarpar ve size net saniyeyi söyler.
        </p>

        <div className="bg-[var(--green-light)] p-8 rounded-[32px] my-10 border-2 border-[var(--green-mid)]/20 shadow-sm">
           <h4 className="text-xl font-black mb-4">Dikkat Edin: Çatlama Sorunu</h4>
           <p className="text-[var(--green-dark)] font-bold mb-0">
             Domateslerde en sık görülen çatlama sorunu, toprağın çok kuruması ve ardından verilen aşırı sudur. Damla sulama ile toprağı sürekli nemli tutarak bu sorunu %90 oranında çözebilirsiniz.
           </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6">Damla Sulama Sisteminde Gübreleme (Fertigasyon)</h2>
        <p>
          Damla sulamanın en büyük avantajı, gübreyi suyla birlikte tam kök bölgesine verebilmektir. Domates; gelişme döneminde Azot (N), çiçeklenme ve meyve bağlamada Fosfor (P) ve meyve tadı-rengi için yoğun Potasyum (K) ister. Damla sulama tankı kullanarak bu elementleri ihtiyaca göre dozlamak verimi %30 artırır.
        </p>

        <h2 className="text-3xl mt-12 mb-6">Sonuç</h2>
        <p>
          Domates yetiştiriciliği sabır ve dikkat ister. Doğru kurulmuş bir <strong>domates damla sulama</strong> sistemi, bu yolculukta sizin en yakın dostunuzdur. Suyu bitkinin ihtiyacı kadar vererek hem yüksek kaliteli ürünler alabilir hem de ülkemizin sınırlı su kaynaklarını koruyabilirsiniz.
        </p>
        <p>
          Kendi tarlanızın verileriyle hesaplama yapmak için sitemizdeki ücretsiz araçları kullanmayı unutmayın!
        </p>
      </div>
    )
  },
  "misir-sulama-takvimi-2026": {
    title: "Mısır Sulama Takvimi 2026: Rekor Verim İçin Bilimsel Rehber",
    date: "7 Mayıs 2026",
    author: "Ahmet Kaya",
    readTime: "35 dk okuma",
    image: "https://images.unsplash.com/photo-1551730459-92db2a308d6a?q=100&w=2560&auto=format&fit=crop",
    category: "Tarla Bitkileri",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic">
          Mısır yetiştiriciliğinde 2026 sezonu, değişen iklim dinamikleri ve hassas tarım teknolojilerinin entegrasyonu ile yeni bir döneme giriyor. Rekor verimlere ulaşmanın yolu, sadece çok su vermek değil, bitkinin biyolojik saatine uyum sağlayan profesyonel bir **mısır sulama takvimi** uygulamaktan geçer.
        </p>

        <h2 className="text-3xl mt-12 mb-6">Giriş: Mısırda Su Yönetimi ve Ekonomik Verimlilik</h2>
        <p>
          Mısır, fotosentez kapasitesi en yüksek bitkilerden biri (C4 bitkisi) olması sebebiyle, enerji üretimi için muazzam miktarda suya ihtiyaç duyar. Ancak bu ihtiyaç, bitkinin yaşam döngüsü boyunca doğrusal değildir. Yanlış zamanda yapılan sulama, hem suyun israfına hem de bitki köklerinin tembelleşmesine neden olurken; kritik bir evredeki bir günlük gecikme, koçan veriminde geri döndürülemez kayıplara yol açabilir. 2026 yılında, girdi maliyetlerinin arttığı bir ortamda, her bir damla suyun verime dönüşmesi için bilimsel bir strateji şarttır.
        </p>

        <h2 className="text-3xl mt-12 mb-6">Büyüme Evrelerine Göre Mısırın Su İhtiyacı: Adım Adım Rehber</h2>
        <p>
          Mısırın yaşam döngüsü vejetatif (V) ve generatif (R) evrelerden oluşur. Başarılı bir **mısır sulama takvimi**, bu evrelerin her birinde topraktaki nem oranını bitkinin kapasitesine göre ayarlar.
        </p>

        <h3 className="text-2xl mt-8 mb-4">1. Çimlenme ve Erken Gelişim (VE - V5)</h3>
        <p>
          Tohumun toprağa düşmesinden ilk 5 yapraklı döneme kadar olan bu süreçte mısırın su tüketimi düşüktür. Ancak bu dönem, kök sisteminin mimarisinin belirlendiği aşamadır. Toprağın bu aşamada aşırı sulanması (su altında kalması), köklerin derinlere inmek yerine yüzeyde kalmasına neden olur. Bu durum, sezon sonundaki sıcak dalgalarına karşı bitkiyi savunmasız bırakır. Hedefimiz, kökleri "su aramaya" teşvik ederek derine inmelerini sağlamaktır.
        </p>

        <h3 className="text-2xl mt-8 mb-4">2. Kritik Eşik: V6 - V10 Dönemi</h3>
        <p>
          Bitki diz hizasına geldiğinde, yani **V6-V10 dönemi**ne girdiğinde, mısırın biyolojik makinesi hızlanır. Bu dönemde mısır, gelecekteki koçanın kaç sıra olacağını ve koçan taslağının uzunluğunu belirlemeye başlar. 
        </p>
        <p>
          Eğer V6 ve V10 arasında bitki su stresine girerse, koçandaki sıra sayısı kalıcı olarak azalır. Bu dönemde gövde uzaması da (internod mesafesi) maksimumdur. 2026 sulama planınızda, bu evrede toprak neminin tarla kapasitesinin %50'sinin altına düşmesine asla izin vermemelisiniz. Bitki boyunun kısa kalması, fotosentez yapacak yaprak alanının azalması demektir.
        </p>

        <h3 className="text-2xl mt-8 mb-4">3. Hızlı Büyüme ve Geç Vejetatif Evre (V12 - VT)</h3>
        <p>
          V12 evresinden tepe püskülü çıkarma anına kadar mısır, günlük su tüketiminde dramatik bir artış yaşar. Yaprak alanı genişlemiş, bitkinin transpirasyon (terleme) hızı maksimuma yaklaşmıştır. Bu dönem, bitkinin generatif döneme (üreme) hazırlık yaptığı "enerji toplama" evresidir.
        </p>

        <h3 className="text-2xl mt-8 mb-4">4. En Kritik Kavşak: Püskül Çıkarma ve Tozlaşma (VT - R1)</h3>
        <p>
          <strong>Mısır yetiştiriciliğinde hatanın telafisi olmayan dönem burasıdır.</strong> Tepe püskülünün (VT) göründüğü ve mısır püsküllerinin (Silking - R1) çıktığı 10-15 günlük süreçte bitki, toplam su ihtiyacının en büyük kısmını kullanır. 
        </p>
        <p>
          **Püskül çıkarma** döneminde yaşanacak sadece 2-3 günlük bir susuzluk, polenlerin kurumasına veya ipeklerin (püsküllerin) çıkışının gecikmesine neden olur. Eğer tepe püskülü toz saçar ama mısır püskülleri susuzluktan dolayı henüz çıkmamışsa, tozlaşma gerçekleşmez ve koçanın uçları boş kalır. Bu dönemde günlük su tüketimi mısır bitkisi başına 10 mm (metrekareye 10 litre) seviyesine kadar çıkabilir. 2026 sezonunda modern sensörler kullanarak bu evrede toprağı sürekli doymuş (ancak drenajı yapılmış) seviyede tutmak hayati önemdedir.
        </p>

        <h3 className="text-2xl mt-8 mb-4">5. Verimi Tartan Dönem: Tane Dolumu (R2 - R5)</h3>
        <p>
          Tozlaşma başarılı bir şekilde tamamlandıktan sonra taneler "sulu olum" veya "süt olum" evresine girer. **Tane dolumu** süreci, mısırın hektolitre ağırlığını ve dolayısıyla tondaki kazancınızı belirler. 
        </p>
        <p>
          R2 (Kabarcık), R3 (Süt) ve R4 (Hamur) dönemlerinde su noksanlığı, tanelerin cılız kalmasına ve koçanın ucundaki tanelerin geri emilmesine (abortion) yol açar. Birçok çiftçi tozlaşma bittiğinde sulamayı azaltma hatasına düşer. Oysa tane dolumunda su, fotosentez ürünlerinin yapraklardan taneye taşınmasını sağlayan "nakliye aracıdır". Nakliye durursa, verim de durur.
        </p>

        <h2 className="text-3xl mt-12 mb-6">Sulama Sıklığı Nasıl Belirlenmelidir?</h2>
        <p>
          **Sulama sıklığı**, sabit bir takvimden ziyade "dinamik bir denklemdir". 2026 yılı için önerilen sıklıklar şu faktörlere göre değişmelidir:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Toprak Bünyesi:</strong> Kumlu topraklarda su tutma kapasitesi düşük olduğu için 3-4 günde bir az miktarda sulama; killi-tınlı topraklarda ise 8-10 günde bir daha derin sulama tercih edilmelidir.</li>
          <li><strong>Hava Durumu (Evapotranspirasyon):</strong> Sıcaklığın 35 dereceyi aştığı ve nemin düştüğü günlerde, bitki yapraklarının kıvrılması (pine-apple effect) sulamanın geç kaldığını gösteren bir sinyaldir.</li>
          <li><strong>Yöntem:</strong> Damla sulama sistemlerinde her gün veya gün aşırı sulama yapılırken, yağmurlama sistemlerinde bu süre daha geniştir.</li>
        </ul>

        <div className="bg-[var(--green-light)] p-8 rounded-[32px] my-10 border-2 border-[var(--green-mid)]/20 shadow-sm">
           <h4 className="text-xl font-black mb-4">2026 İklim Uyarısı: Gece Sulaması</h4>
           <p className="text-[var(--green-dark)] font-bold mb-0">
             Artan küresel sıcaklıklar nedeniyle gündüz yapılan yağmurlama sulamalarda suyun %30-40'ı daha bitkiye ulaşmadan havada buharlaşmaktadır. 2026 sezonunda su verimliliğini artırmak için gece saat 22:00 ile sabah 06:00 arası sulama yapmak, su tasarrufu ve bitki serinliği açısından en etkili yöntemdir.
           </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6">FAO Penman-Monteith ve Hassas Tarım Teknolojileri</h2>
        <p>
          Geleneksel yöntemlerle "parmak testi" yaparak sulama zamanı belirlemek artık yeterli değildir. **Mısır sulama takvimi** oluştururken Penman-Monteith metodolojisi, güneş radyasyonu, rüzgar hızı ve bağıl nemi kullanarak gerçek su kaybını milimetrik olarak hesaplar.
        </p>
        <p>
          Uygulamamızdaki hesaplama modülü, bu karmaşık denklemleri arka planda çalıştırarak mısırınızın o gün tarladan ne kadar su "uçurduğunu" size söyler. Bitki katsayıları (Kc), mısırın V6 döneminde 0.40 iken, püskül çıkarma döneminde 1.20'ye fırlar. Yani bitki, referans buharlaşmadan %20 daha fazla su tüketir. Bu farkı bilmeyen bir çiftçinin verim kaybı yaşaması kaçınılmazdır.
        </p>

        <h2 className="text-3xl mt-12 mb-6">Modern Sulama Sistemlerinin Karşılaştırılması</h2>
        <p>
          Mısırda hangi sistemin kullanılacağı, tarlanın topografyası ve su kaynağına bağlıdır:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Damla Sulama:</strong> En yüksek verim ve su tasarrufu sağlar. Gübreyi suyla verme (fertigasyon) imkanı sunar. Gövde yanıklığı riskini azaltır.</li>
          <li><strong>Yağmurlama (Center Pivot/Lineer):</strong> İşçilik maliyetini düşürür, geniş alanlar için uygundur. Ancak yüksek sıcaklıkta buharlaşma kaybı dezavantajdır.</li>
          <li><strong>Salma (Karıklı) Sulama:</strong> Su israfı çok yüksektir, tarlada nem dengesi sağlamak zordur. 2026 sürdürülebilirlik hedefleri doğrultusunda terk edilmesi önerilen bir yöntemdir.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6">Sonuç: FAO Verileri ve Gelecek Öngörüleri</h2>
        <p>
          <strong>Mısır sulama takvimi 2026</strong> rehberimizin ana fikri "doğru miktar, doğru zaman" prensibidir. FAO verilerine göre mısırın toplam yetişme süresince 500-800 mm suya ihtiyacı vardır. Yağışlar bu miktarı karşılamıyorsa, aradaki fark sulama ile verilmelidir. Penman-Monteith metodolojisini kullanan uygulamamız üzerinden tarlanızın koordinatlarını girerek, toprağınızın su tutma kapasitesine göre bugün ne kadar su vermeniz gerektiğini görebilirsiniz.
        </p>
        <p>
          Özetle; erken dönemde kök geliştirme, V6-V10 evresinde koçan yapısını koruma, püskül çıkarmada maksimum su desteği ve tane dolumunda kesintisiz nem yönetimi rekor verimin anahtarıdır. Bilimsel veriden uzak yapılan sulamalar ya bitkinizi boğar ya da susuz bırakır.
        </p>
        <p>
          Tarımda şansa yer yoktur, sadece ölçülebilir veriler vardır. Siz de tarlanızın verim potansiyelini maksimize etmek için sitemizdeki günlük sulama asistanını kullanabilir, bitkinizin dilinden anlayan profesyonel bir üreticiye dönüşebilirsiniz. 2026 sezonunun tüm üreticilerimiz için bol bereketli ve karlı geçmesini dileriz.
        </p>
        <p>
          Hemen hesaplama yapmak için <Link to="/" className="text-[var(--green-mid)] font-black decoration-2 underline">Buraya Tıklayın</Link> ve tarlanızın susuz kalmadığından emin olun!
        </p>
      </div>
    )
  },
  "turkiyede-damla-sulama-kurulum-maliyeti-2026": {
    title: "Türkiye'de Damla Sulama Kurulum Maliyeti 2026",
    date: "9 Mayıs 2026",
    author: "Mehmet Çelik",
    readTime: "20 dk okuma",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=100&w=2560&auto=format&fit=crop",
    category: "Sulama Maliyetleri",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic">
          Türkiye'de tarımsal verimliliği artırmak ve sınırlı su kaynaklarını korumak amacıyla modern sulama sistemlerine geçiş her geçen gün daha fazla önem kazanmaktadır. 2026 yılı itibarıyla, iklim değişikliği ve azalan yeraltı su seviyeleri, geleneksel salma sulama yerine modern yöntemleri zorunlu hale getirmiştir. Bu bağlamda, üreticilerin en çok araştırdığı konuların başında <strong>damla sulama maliyeti</strong> gelmektedir.
        </p>

        <h2 className="text-3xl mt-12 mb-6">1. Giriş: Tarımda Su Yönetimi ve Damla Sulamanın Önemi</h2>
        <p>
          Tarımsal üretimde girdilerin (mazot, gübre, işçilik) arttığı 2026 sezonunda, suyu ve gübreyi en verimli şekilde kullanmak hayatta kalma meselesidir. Damla sulama sistemleri, geleneksel yöntemlere kıyasla %50'ye varan su tasarrufu sağlamasının yanı sıra gübreleme işlemini suyla birlikte tam olarak kök bölgesine ulaştırarak (fertigasyon) gübre maliyetlerini de %40 azaltır.
        </p>
        <p>
          Sistemin ilk kurulum maliyeti yüksek gibi görünse de, artan verim (%20 ila %50 arası artış) and asgariye inen işçilik giderleri sayesinde <strong>damla sulama maliyeti</strong> genellikle 1 ila 2 üretim sezonu içinde kendisini tamamen amorti etmektedir.
        </p>

        <h2 className="text-3xl mt-12 mb-6">2. 2026 Yılında Dönüm (Dekar) Başına Ortalama Damla Sulama Maliyeti</h2>
        <p>
          Bir tarlada damla sulama sistemi kurmanın maliyeti sabit değildir. Dönüm (1000 m²) başına yansıyan <strong>damla sulama maliyeti</strong>, tarlanın şekline, ekilen ürünün cinsine (meyve ağacı, mısır, domates, pancar vb.), kullanılacak boru kalitesine ve lateral (damlatıcı boru) aralıklarına göre değişiklik gösterir.
        </p>
        <p>
          2026 yılı piyasa verilerine göre, her şey dahil (filtre, ana boru, lateraller, vanalar, fittings elemanları ve işçilik) dönüm başına ortalama maliyetler şu şekildedir:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Sıra Arası Geniş Olan Kültürler (Meyve Bahçeleri, Zeytinlikler - 5x5m veya 6x6m):</strong> Dönüm başına maliyet <strong>7.500 TL – 11.000 TL</strong> arasındadır. Daha az lateral boru kullanıldığı için malzeme maliyeti daha uygundur.</li>
          <li><strong>Sıra Arası Dar Olan Tarla Bitkileri (Mısır, Patates, Pancar - 70cm):</strong> Dönüm başına maliyet <strong>13.000 TL – 18.500 TL</strong> arasındadır. Yoğun ince veya kalın duvarlı lateral boru çekilmesi malzeme miktarını doğrudan artırır.</li>
          <li><strong>Sebze Tarımı (Domates, Biber, Çilek vb. - 40cm - 50cm çift sıra):</strong> Dönüm başına maliyet <strong>15.000 TL – 22.000 TL</strong> arasındadır. Yüksek sıklıkta damlatıcı boruya ve hassas filtreleme sistemine ihtiyaç duyulur.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6">3. Şehre ve Bölgeye Göre Damla Sulama Kurulum Maliyetleri 2026</h2>
        <p>
          Türkiye'deki farklı tarım merkezlerinde damla sulama malzemelerine ulaşım kolaylığı, yerel işçilik ücretleri ve su kaynağının niteliği pazar fiyatlarını doğrudan etkilemektedir. Örneğin, derin kuyulardan su basılan İç Anadolu'da filtre ve hidrofor üniteleri daha karmaşık seçilirken, nehir-kanal suyu kullanılan Ege ve Akdeniz'de disk ve kum-çakıl filtre sistemleri yaygındır.
        </p>
        <p>
          İşte Türkiye'nin önde gelen tarım şehirlerine göre 10 dönüm (1 hektar) alan için tahmini <strong>damla sulama maliyeti</strong> karşılaştırma tablosu:
        </p>

        <div className="overflow-x-auto my-8 border border-stone-200 rounded-2xl">
          <table className="min-w-full divide-y divide-stone-200">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-widest">Şehir</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-widest">Bölgesel Özellik / Su Kaynağı</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-stone-500 uppercase tracking-widest">10 Dönüm Ortalama Kurulum Maliyeti (2026)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-stone-100">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-stone-900">Konya</td>
                <td className="px-6 py-4 text-sm text-stone-600">Yeraltı Derin Kuyu (150-250m) ve Kum Çakıl Filtre</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-[var(--green-dark)]">135.000 TL – 175.000 TL</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-stone-900">Şanlıurfa</td>
                <td className="px-6 py-4 text-sm text-stone-600">GAP Kanal Suyu (Yüksek mil oranı sebebiyle disk filtre şart)</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-[var(--green-dark)]">125.000 TL – 160.000 TL</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-stone-900">Adana</td>
                <td className="px-6 py-4 text-sm text-stone-600">Seyhan/Ceyhan Sulama Kanalları ve Yoğun Gübreleme Tankı</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-[var(--green-dark)]">130.000 TL – 165.000 TL</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-stone-900">İzmir</td>
                <td className="px-6 py-4 text-sm text-stone-600">Kuyu Suyu / Baraj Suyu ve Damlama Sulama Sistemleri</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-[var(--green-dark)]">115.000 TL – 150.000 TL</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-stone-900">Bursa</td>
                <td className="px-6 py-4 text-sm text-stone-600">Meyve Bahçesi Yoğunluklu (Az lateral boru, uzun ömürlü malzeme)</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-[var(--green-dark)]">95.000 TL – 130.000 TL</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-stone-900">Diyarbakır</td>
                <td className="px-6 py-4 text-sm text-stone-600">Kuru Tarımdan Suluya Geçiş (Ana hat çekim maliyeti yüksek)</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-[var(--green-dark)]">130.000 TL – 170.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          Bu fiyat varyasyonlarının temel sebepleri şunlardır:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Su Kaynağının Kalitesi:</strong> Sulama suyunun mil, çamur veya kireç oranı yüksekse çok kademeli filtre grubu kurulması gerekir. Bu da ana kontrol ünitelerinin fiyatını %40 oranında artırır.</li>
          <li><strong>Topografya:</strong> Eğimli engebeli arazilerde, her damlatıcıdan eşit miktarda su çıkmasını sağlayan <strong>basınç ayarlı (PC - Pressure Compensating)</strong> lateral boruların kullanılması zorunludur. PC borular standart borulara göre %45 daha pahalıdır.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6">4. Damla Sulama Sistemi Kurulum Adımları</h2>
        <p>
          Doğru kurulmayan bir damla sulama sistemi, tarlanın yarısının susuz kalmasına, diğer yarısının ise göllenmesine yol açar. Bu durum verimi düşürür ve yapılan yatırımı ziyan eder. Profesyonel bir damla sulama sistemi kurulumu şu 5 adımdan oluşur:
        </p>

        <h3 className="text-2xl mt-8 mb-4">Adım 1: Arazi Keşfi ve Su Kaynağının Analizi</h3>
        <p>
          Kurulumdan önce, tarlanın en yüksek ve en alçak noktaları belirlenir. Su kaynağının (kuyu, akarsu, kanal) debisi (saatte kaç ton su verdiği) ve basıncı ölçülür. Suyun kimyasal yapısı analiz edilerek filtre seçimi yapılır.
        </p>

        <h3 className="text-2xl mt-8 mb-4">Adım 2: Mühendislik ve Projelendirme (Hidrolik Hesaplamalar)</h3>
        <p>
          Tarlanın boyutlarına ve bitki türüne göre boru çapları hesaplanır. Örneğin ana boru hattı kaç inç olmalı? (Genellikle 75-110 mm arası). Laterallerin uzunluğu ne kadar olmalı? (Önerilen maksimum uzunluk 16 mm boru için 100 metredir). Bu adımda basınç kayıpları hesaplanarak pompanın gücü ile tarladaki bölme sayısı (sektörler) ayarlanır.
        </p>

        <h3 className="text-2xl mt-8 mb-4">Adım 3: Kontrol Ünitesi ve Filtre Grubunun Montajı</h3>
        <p>
          Su kaynağının hemen çıkışına sırasıyla; vana, gübre tankı (fertigasyon), hidrosiklon ve disk/elek filtre monte edilir. Bu ünite sistemin "kalbidir". Filtrelerin yetersiz olması durumunda tarladaki yüzlerce küçük delik (damlatıcı) kireç ve milden dolayı tıkanır.
        </p>

        <h3 className="text-2xl mt-8 mb-4">Adım 4: Ana ve Yan Boru Hatlarının Çekilmesi</h3>
        <p>
          PVC veya Polietilen (PE) esaslı ana borular tarlanın kenarına veya toprak altına yerleştirilir. Ana borudan yan hatlara geçişte küresel veya selenoid vanalar yerleştirilerek sulama bölgeleri (sektörler) oluşturulur ve su basıncı eşit olarak bölünür.
        </p>

        <h3 className="text-2xl mt-8 mb-4">Adım 5: Lateral Damlatıcı Boruların Serilmesi ve Test</h3>
        <p>
          Bitki sıralarının yanına lateral borular serilir. Boruların uçları kapatılır. Sisteme su verilerek basınç kaçakları kontrol edilir. Manometreler ile basıncın ideal çalışma aralığında (genellikle 1 ila 1.5 bar) olup olmadığı doğrulanır.
        </p>

        <h2 className="text-3xl mt-12 mb-6">5. Devlet Destekleri ve Hibeler 2026: Maliyeti Nasıl Düşürebilirsiniz?</h2>
        <p>
          Artan girdi maliyetlerine karşı devlet, modern basınçlı sulama sistemlerine geçişi teşvik etmek amacıyla ciddi destekler sağlamaktadır. 2026 yılında üreticiler bu desteklerden faydalanarak <strong>damla sulama maliyeti</strong> bütçelerini %50 oranında düşürebilmektedir.
        </p>

        <h3 className="text-2xl mt-8 mb-4">1. Tarım ve Orman Bakanlığı %50 Bireysel Sulama Hibeleri (KKYDP)</h3>
        <p>
          Her yıl düzenlenen Kırsal Kalkınma Yatırımlarının Desteklenmesi Programı (KKYDP) kapsamında, tarla içi modern basınçlı sulama sistemleri (damla ve yağmurlama) alımlarına <strong>%50 hibe desteği</strong> verilmektedir. Çiftçi Kayıt Sistemi'ne (ÇKS) kayıtlı olan tüm üreticiler başvuru yapabilir. Dosya hazırlama, malzeme alımı ve mühendislik projeleri bu hibe kapsamındadır.
        </p>

        <h3 className="text-2xl mt-8 mb-4">2. Ziraat Bankası Sıfır Faizli (Sübvansiyonlu) Tarım Kredileri</h3>
        <p>
          Ziraat Bankası ve Tarım Kredi Kooperatifleri aracılığıyla, damla sulama sistemi kurulumu için <strong>%100 faiz indirimli (faizsiz)</strong> modern basınçlı sulama kredisi kullandırılmaktadır. Genellikle 5 ila 7 yıla kadar yayılan elverişli geri ödeme imkanları ve ilk yıl ödemesiz dönem seçeneği sunulur. Çiftçi, üründen kazandığı para ile kredi taksitlerini rahatça ödeyebilmektedir.
        </p>

        <h3 className="text-2xl mt-8 mb-4">3. TKDK IPARD III Destekleri</h3>
        <p>
          IPARD programı uygulanan illerde, tarımsal işletmelerin fiziki varlıklarına yönelik yatırımlar kapsamında sulama altyapısı iyileştirmelerine %50 ila %70 arasında değişen oranlarda geri ödemesiz hibeler sunularak <strong>damla sulama maliyeti</strong> yükü büyük ölçüde hafifletilmektedir.
        </p>

        <h2 className="text-3xl mt-12 mb-6">6. Damla Sulama Yatırımında Dikkat Edilmesi Gereken Kritik Hatalar</h2>
        <p>
          Yatırım bütçenizi en verimli şekilde kullanmak ve beklenmedik ek maliyetlerle karşılaşmamak için şu hususlara dikkat etmelisiniz:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Çok Ucuz, Kayıt Dışı Malzemeden Kaçının:</strong> Geri dönüştürülmüş plastiklerden üretilen merdiven altı lateral borular güneş ışığına (UV) dayanıksızdır ve ilk sezonda çatlar. Bu durum, amortisman süresini uzatır ve gerçek <strong>damla sulama maliyeti</strong> faturanızı ikiye katlar.</li>
          <li><strong>Filtreyi Küçük Seçmeyin:</strong> Tıkanan damlatıcıları temizlemek imkansıza yakındır. Tek tek boruları değiştirmek zorunda kalırsınız. Suyunuz kirliyse otomatik ters yıkamalı filtre sistemlerine yatırım yapın.</li>
          <li><strong>Tarımsal Sulama Hesaplayıcılardan Yardım Alın:</strong> Tarlanıza ne kadar su vermeniz gerektiğini tahmin etmek yerine, sitemizde bulunan <strong>FAO Penman-Monteith</strong> tabanlı bilimsel hesaplama aracımızı kullanarak günlük bazda ne kadar su vermeniz gerektiğini tam olarak saniye saniye hesaplayın. Bu sayede gereksiz pompa çalıştırma elektrik faturasından kurtulursunuz.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6">7. Sonuç: Damla Sulama Bir Masraf Değildir, Yatırımdır</h2>
        <p>
          2026 tarım vizyonunda su, paradan daha değerlidir. Dönüm başına ödeyeceğiniz <strong>damla sulama maliyeti</strong> bir gider kalemi değil; tarlanızın geleceğine, toprağınızın sağlığına ve cebinizin bereketine yapılan kalıcı bir yatırımdır.
        </p>
        <p>
          Verimli gübre kullanımı, asgari yabancı ot gelişimi, yüksek oranda su tasarrufu ve pazar değeri yüksek kaliteli homojen ürün hasadı düşünüldüğünde, damla sulama sistemleri kendisini en kısa sürede ödeyen yegane tarım teknolojisidir. Devletinizin sunduğu %50 hibeleri ve faizsiz kredileri yakından takip ederek, bu dönüşümü 2026 yılında bütçenizi sarsmadan kolayca gerçekleştirebilirsiniz.
        </p>
        <p>
          Tarlanız için en doğru sulama sürelerini ve su miktarlarını hesaplamak için sitemizin ana sayfasındaki <strong>Hassas Sulama Hesaplayıcıyı</strong> tamamen ücretsiz olarak deneyebilirsiniz. Bol bereketli ve yüksek verimli hasatlar dileriz!
        </p>
      </div>
    )
  },
  "toprak-tipine-gore-sulama-miktari-nasil-hesaplanir": {
    title: "Toprak Tipine Göre Sulama Miktarı Nasıl Hesaplanır?",
    date: "10 Mayıs 2026",
    author: "Dr. Elif Yılmaz",
    readTime: "25 dk okuma",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123a6b9?auto=format&fit=crop&w=800&q=80",
    category: "Toprak Bilgisi",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic">
          Tarımsal üretimde başarının sırrı, bitkinin ihtiyaç duyduğu suyu doğru zamanda ve doğru miktarda vermektir. Ancak tarlanıza ne kadar su uygulamanız gerektiği sadece bitki türüne veya hava durumuna değil, doğrudan doğruya toprağın yapısına bağlıdır. Bilimsel ve sürdürülebilir bir tarım için <strong>toprak tipi sulama</strong> ilişkisini anlamak ve su tutma kapasitesine göre matematiksel hesaplamalar yapmak rekor verimin anahtarıdır.
        </p>

        <h2 className="text-3xl mt-12 mb-6">1. Giriş: Toprak ve Su Arasındaki Biyofiziksel İlişki</h2>
        <p>
          Toprak, sadece bitki köklerini sabitleyen statik bir materyal değil; katı parçacıklar, hava boşlukları ve nem kanallarından oluşan yaşayan dinamik bir matriksdir. Her tarlanın toprağı, milimetrenin binde biri büyüklüğündeki kil tanelerinden, gözle görülebilen iri kum tanelerine kadar farklı boyutlarda parçacıklar içerir. 
        </p>
        <p>
          2026 yılı iklim projeksiyonları ve azalan su kaynakları göz önüne alındığında, tarımda rastgele yapılan sulamalar hem su israfına hem de toprağın çoraklaşmasına neden olmaktadır. İşte bu yüzden, her üreticinin kendi tarlasına özel bir <strong>toprak tipi sulama</strong> programı oluşturması ve toprağının fiziksel sınırlarına göre su miktarını milimetrik hesaplaması gerekir.
        </p>

        <h2 className="text-3xl mt-12 mb-6">2. Toprak Tiplerini Tanıyalım: Killi, Kumlu, Tınlı Topraklar</h2>
        <p>
          Toprağın bünyesi (tekstürü), içerdiği kum, mil ve kil oranına göre belirlenir. Bu üç temel bileşenin farklı kombinasyonları, toprağın gözenek yapısını ve dolayısıyla suyun toprak içerisindeki hareket hızını belirler. Sulama planlamasında en yaygın karşılaştığımız üç ana toprak tipi şunlardır:
        </p>

        <h3 className="text-2xl mt-8 mb-4">A) Kumlu Toprak (Hafif Bünyeli Topraklar)</h3>
        <p>
          Kumlu topraklar, %85 ve daha fazla oranda kum parçacığı içerir. Gözenekleri (makro gözenekler) oldukça iridir. Bu nedenle su toprağa girdiğinde yerçekiminin de etkisiyle hızla süzülür ve derinlere doğru hareket eder. 
        </p>
        <p>
          <strong>Kumlu toprakların özellikleri:</strong>
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li><strong>Su Tutma Kapasitesi:</strong> Çok düşüktür. Suyu bünyesinde tutacak küçük kılcal kanallardan yoksundur.</li>
          <li><strong>Drenaj ve Havalanma:</strong> Çok mükemmeldir. Toprak havalanması yüksek olduğu için kökler oksijensiz kalmaz.</li>
          <li><strong>Sulama Yaklaşımı:</strong> Suyu hızla sızdırdığı için bu topraklarda "Az Miktar - Sık Aralık" (küçük sulama derinlikleri ile sık uygulama) yöntemi izlenmelidir. Tek seferde çok su vermek gübrenin ve suyun yıkanarak kök bölgesinden uzaklaşmasına (leaching) yol açar.</li>
        </ul>

        <h3 className="text-2xl mt-8 mb-4">B) Killi Toprak (Ağır Bünyeli Topraklar)</h3>
        <p>
          Killi topraklar, ağırlıkça %40 ve üzerinde çok ince kil taneciği içerir. Kil tanecikleri mikroskobik boyutlarda olduğundan aralarındaki boşluklar (mikro gözenekler) olağanüstü küçüktür. Bu kılcal boşluklar suyu adeta bir sünger gibi emer ve bırakmaz.
        </p>
        <p>
          <strong>Killi toprakların özellikleri:</strong>
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li><strong>Su Tutma Kapasitesi:</strong> Çok yüksektir. Muazzam miktarda su depolayabilir.</li>
          <li><strong>Drenaj ve Havalanma:</strong> Zayıftır. Islandığında şişer, gözenekler kapanır ve suyun tarlada göllenmesine yol açar. Geç kurur ve kuruduğunda beton gibi sertleşerek derin yarıklar oluşturur.</li>
          <li><strong>Sulama Yaklaşımı:</strong> Suyu çok yavaş emdiği için (sızma hızı düşüktür) sulama hızı düşük tutulmalıdır. "Çok Miktar - Seyrek Aralık" şeklinde sulanırlar. Hızlı su verilirse yüzey akışına geçerek erozyona sebep olur. Göllenme ise köklerin oksijensiz kalıp çürümesine (havasızlık/asfiksi) yol açar.</li>
        </ul>

        <h3 className="text-2xl mt-8 mb-4">C) Tınlı Toprak (Orta Bünyeli İdeal Topraklar)</h3>
        <p>
          Tınlı topraklar tarımsal üretim için altın standarttır. Yaklaşık olarak eşit oranlarda kum, mil ve kil karışımından oluşurlar. Ne kumlu toprak kadar gevşek ve su sızdıran, ne de killi toprak kadar ağır ve havasız olan dengeli bir yapıya sahiptirler.
        </p>
        <p>
          <strong>Tınlı toprakların özellikleri:</strong>
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li><strong>Su Tutma Kapasitesi:</strong> İdeal seviyededir. Bitkinin kolayca alabileceği suyu en mükemmel şekilde saklar.</li>
          <li><strong>Drenaj ve Havalanma:</strong> Dengelidir. Köklerin ihtiyacı olan su, hava ve besin elementlerini bir arada sunar.</li>
          <li><strong>Sulama Yaklaşımı:</strong> Standart planlamalara en iyi yanıtı veren topraklardır. Orta düzeyde sulama sıklığı ve sulama derinliğiyle yüksek verimlilik sunar.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6">3. Su Tutma Kapasitesi (Water Holding Capacity) Nedir?</h2>
        <p>
          Toprağın su tutma kapasitesi, toprağın yerçekimi kuvvetine karşı bünyesinde tutabildiği maksimum su miktarıdır. Bu kapasiteyi yöneten ve sulama hesaplamalarında bilmemiz gereken üç kritik fiziki nokta vardır:
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8 my-8 space-y-6">
          <div>
            <h4 className="text-xl font-black text-[var(--green-dark)]">1. Tarla Kapasitesi (TK):</h4>
            <p className="text-stone-600 font-bold mb-0">Toprak bol suyla sulandıktan ve serbest süzülme suyu yerçekimiyle tamamen uzaklaştıktan sonra toprak gözeneklerinde kalan nem miktarıdır. Toprağın doygun olduğu ancak köklerin nefes alabildiği en sağlıklı üst sınırdır.</p>
          </div>
          <div className="border-t border-stone-200 pt-6">
            <h4 className="text-xl font-black text-[var(--green-dark)]">2. Daimi Solma Noktası (SN):</h4>
            <p className="text-stone-600 font-bold mb-0">Topraktaki suyun bitki kökleri tarafından emilemeyecek kadar sıkı tutulduğu kritik alt sınırdır. Toprakta bu sınırın altında su olsa bile bitki bunu çekemez ve geri dönüşümsüz olarak solmaya başlar.</p>
          </div>
          <div className="border-t border-stone-200 pt-6">
            <h4 className="text-xl font-black text-[var(--green-dark)]">3. Kullanılabilir Su Kapasitesi (KSK):</h4>
            <p className="text-stone-600 font-bold mb-0">Tarla Kapasitesi ile Daimi Solma Noktası arasındaki farktır (KSK = TK - SN). Bitkinin tarladan rahatça çekip büyüme için kullanabileceği net su rezervidir.</p>
          </div>
        </div>

        <p>
          Aşağıdaki tabloda farklı toprak tiplerinin yüzde düzeyinde kuru toprak ağırlığına göre ortalama su tutma kapasitesi değerleri derlenmiştir:
        </p>

        <div className="overflow-x-auto my-8 border border-stone-200 rounded-2xl">
          <table className="min-w-full divide-y divide-stone-200">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-widest">Toprak Tipi</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-stone-500 uppercase tracking-widest">Tarla Kapasitesi (TK - % ağırlık)</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-stone-500 uppercase tracking-widest">Daimi Solma Noktası (SN - % ağırlık)</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-stone-500 uppercase tracking-widest">Kullanılabilir Su Kapasitesi (KSK - % ağırlık)</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-stone-500 uppercase tracking-widest">Hacim Ağırlığı (As - g/cm³)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-stone-100">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-stone-900">Kumlu Toprak</td>
                <td className="px-6 py-4 text-right text-sm text-stone-600">8% – 12%</td>
                <td className="px-6 py-4 text-right text-sm text-stone-600">3% – 5%</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-[var(--green-mid)]">5% – 7%</td>
                <td className="px-6 py-4 text-right text-sm text-stone-500">1.50 – 1.65</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-stone-900">Tınlı (İdeal) Toprak</td>
                <td className="px-6 py-4 text-right text-sm text-stone-600">20% – 26%</td>
                <td className="px-6 py-4 text-right text-sm text-stone-600">8% – 12%</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-[var(--green-mid)]">12% – 14%</td>
                <td className="px-6 py-4 text-right text-sm text-stone-500">1.30 – 1.45</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-stone-900">Killi (Ağır) Toprak</td>
                <td className="px-6 py-4 text-right text-sm text-stone-600">32% – 40%</td>
                <td className="px-6 py-4 text-right text-sm text-stone-600">18% – 24%</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-[var(--green-mid)]">14% – 16%</td>
                <td className="px-6 py-4 text-right text-sm text-stone-500">1.10 – 1.25</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl mt-12 mb-6">4. Toprak Tipine Göre Sulama Miktarı Matematiksel Formülü</h2>
        <p>
          Tarlaya her sulamada verilecek net su derinliğini (dn) milimetre (mm veya l/m²) cinsinden hesaplamak için ziraat mühendisleri tarafından kullanılan temel hidrolik formül şudur:
        </p>
        
        <div className="bg-[var(--green-light)] p-8 rounded-[32px] my-6 border-2 border-[var(--green-mid)]/20 text-center shadow-inner">
          <p className="text-2xl font-black text-[var(--green-dark)] tracking-wider mb-2">
            dn = [ (TK - SN) × As × D × ry ] / 10
          </p>
        </div>

        <p className="mt-4">
          Buradaki terimlerin anlamı ve birimleri şu şekildedir:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>dn:</strong> Net sulama suyu miktarı (mm). 1 milimetre sulama suyu, 1 metrekareye verilen 1 litre suya (l/m²) eşittir.</li>
          <li><strong>TK:</strong> Toprağın kuru ağırlık yüzdesi cinsinden Tarla Kapasitesi (%).</li>
          <li><strong>SN:</strong> Toprağın kuru ağırlık yüzdesi cinsinden Daimi Solma Noktası (%).</li>
          <li><strong>As:</strong> Toprağın Hacim Ağırlığı (g/cm³). Toprağın sıkışıklığına ve gözenekliğine göre değişir. Ağır topraklarda düşüktür, kumlu topraklarda yüksektir.</li>
          <li><strong>D:</strong> Bitkinin etkili kök derinliği (cm). Örneğin; genç fideler için 20-30 cm alınırken, yetişkin mısır veya meyve ağaçları için bu değer 60-90 cm olarak seçilir.</li>
          <li><strong>ry:</strong> İzin verilen kullanılabilir su tüketim payı (onluk oran şeklinde yazılır, örn. %50 tüketim için 0.50 alınır). Bitkilerin toprak suyunu çekerken stresi girmeden çekebileceği güvenli eşiktir. Çoğu kültür bitkisinde bu oran %40 ila %50 civarındadır.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6">5. Bilimsel ve Pratik Örnekler (Pratik Hesaplamalar)</h2>
        <p>
          Formülün tarlada nasıl hayata geçirileceğini anlamak için farklı <strong>toprak tipi sulama</strong> senaryoları üzerinden pratik hesaplamalar yapalım. Üç senaryoda da etkili kök derinliğini (D) <strong>60 cm</strong>, izin verilen nem tüketim oranını (ry) ise <strong>%50 (0.50)</strong> olarak kabul edeceğiz.
        </p>

        <div className="space-y-10 my-10">
          {/* ÖRNEK 1 */}
          <div className="border hover:border-[var(--green-mid)] transition-colors p-8 rounded-[32px] bg-white group">
            <h3 className="text-2xl font-black text-stone-900 group-hover:text-[var(--green-dark)] transition-colors mb-4">Pratik Örnek 1: Kumlu Toprak Üzerinde Patates Sulaması</h3>
            <p className="text-stone-500 font-bold">
              Kumlu toprağa sahip bir tarlada TK = %10, SN = %4, Hacim Ağırlığı As = 1.6 g/cm³ olsun.
            </p>
            <div className="bg-stone-50 p-6 rounded-2xl font-mono text-sm leading-relaxed text-stone-700 my-4 border">
              TK = 10<br />
              SN = 4<br />
              As = 1.6 g/cm³<br />
              D = 60 cm<br />
              ry = 0.50 (Yarısı tükenince sulama yapılacak)<br />
              <br />
              dn = ((10 - 4) * 1.6 * 60 * 0.50) / 10<br />
              dn = (6 * 1.6 * 30) / 10<br />
              dn = 288 / 10 = 28.8 mm (metrekare başına 28.8 litre)
            </div>
            <p className="text-stone-600 mb-0">
              <strong>Sonucun Analizi:</strong> Kumlu toprakta, köklerin bulunduğu 60 cm derinlikteki güvenli su havuzumuz sadece <strong>28.8 mm</strong>'dir. Bu da demek oluyor ki, eğer yaz döneminde günlük buharlaşma (ETc) ortalama 8 mm ise, bu tarla yaklaşık <strong>3.5 günde bir (28.8 / 8 = 3.6 gün)</strong> sulanmalıdır. Sık, fakat küçük sulama derinlikleri uygulanmalıdır.
            </p>
          </div>

          {/* ÖRNEK 2 */}
          <div className="border hover:border-[var(--green-mid)] transition-colors p-8 rounded-[32px] bg-white group">
            <h3 className="text-2xl font-black text-stone-900 group-hover:text-[var(--green-dark)] transition-colors mb-4">Pratik Örnek 2: Killi Toprakta Meyve Ağacı Sulaması</h3>
            <p className="text-stone-500 font-bold">
              Ağır killi toprağa sahip bir bahçede TK = %34, SN = %20, Hacim Ağırlığı As = 1.2 g/cm³ olsun.
            </p>
            <div className="bg-stone-50 p-6 rounded-2xl font-mono text-sm leading-relaxed text-stone-700 my-4 border">
              TK = 34<br />
              SN = 20<br />
              As = 1.2 g/cm³<br />
              D = 60 cm<br />
              ry = 0.50<br />
              <br />
              dn = ((34 - 20) * 1.2 * 60 * 0.50) / 10<br />
              dn = (14 * 1.2 * 30) / 10<br />
              dn = 504 / 10 = 50.4 mm (metrekareye 50.4 litre)
            </div>
            <p className="text-stone-600 mb-0">
              <strong>Sonucun Analizi:</strong> Killi toprakta su havuzumuz <strong>50.4 mm</strong> ile neredeyse kumlu toprağın iki katı büyüklüktedir. Günlük buharlaşmanın 8 mm olduğu aynı hava koşullarında, bu tarlanın sulama döngüsü <strong>6-7 günde bire (50.4 / 8 = 6.3 gün)</strong> çıkar. Tek seferde daha yüksek miktarda su verilebilir ancak killi yapının suyu emmesi için sulama debisi düşük tutulmalıdır.
            </p>
          </div>

          {/* ÖRNEK 3 */}
          <div className="border hover:border-[var(--green-mid)] transition-colors p-8 rounded-[32px] bg-white group">
            <h3 className="text-2xl font-black text-stone-900 group-hover:text-[var(--green-dark)] transition-colors mb-4">Pratik Örnek 3: Tınlı Toprakta Mısır Sulaması</h3>
            <p className="text-stone-500 font-bold">
              Orta bünyeli dengeli tınlı bir toprakta TK = %24, SN = %12, Hacim Ağırlığı As = 1.4 g/cm³ katalım.
            </p>
            <div className="bg-stone-50 p-6 rounded-2xl font-mono text-sm leading-relaxed text-stone-700 my-4 border">
              TK = 24<br />
              SN = 12<br />
              As = 1.4 g/cm³<br />
              D = 60 cm<br />
              ry = 0.50<br />
              <br />
              dn = ((24 - 12) * 1.4 * 60 * 0.50) / 10<br />
              dn = (12 * 1.4 * 30) / 10<br />
              dn = 504 / 10 = 50.4 mm (Metrekareye 50.4 litre)
            </div>
            <p className="text-stone-600 mb-0">
              <strong>Sonucun Analizi:</strong> Tınlı toprakta su havuzumuz killi toprağa benzer şekilde oldukça yüksek seviyede olup <strong>50.4 mm</strong> su depolama kapasitesine erişmiştir. Üstelik bu toprak, killi toprak gibi kökleri boğmaz veya havasız bırakmaz; aynı zamanda gözenekleri kumlu toprak gibi gevşek olmadığından suyun sızmasını engeller. Tınlı toprakta bitki kökleri suyu çok daha az enerji sarf ederek emer. Bu da en yüksek verimliliğe giden doğal yoldur.
            </p>
          </div>
        </div>

        <h2 className="text-3xl mt-12 mb-6">6. Toprak Nemini Tarlada Tespit Etmenin Kolay Yolları</h2>
        <p>
          Matematiksel formüllerin yanı sıra tarlada toprağın nem durumunu gözlemlemek için çiftçiler tarafından uygulanan pratik teknikler bulunmaktadır:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>"Toprak Topu" (Dokunma) Testi:</strong> Bitkinin kök bölgesinden (yaklaşık 20-30 cm derinden) bir avuç toprak alın ve elinizle sıkın.
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>Eğer toprak sıktığınızda top halinde kalmıyor, hemen dağılıyorsa toprak aşırı kurudur ve daimi solma noktasına yaklaşmıştır; <strong>derhal sulanmalıdır.</strong></li>
              <li>Eğer sıktığınızda top haline geliyor ancak dokunduğunuzda hafifçe çatlıyorsa nem düzeyi mükemmeldir; <strong>sulama henüz gerekli değildir.</strong></li>
              <li>Eğer sıktığınızda çamur gibi elinize yapışıyor ve su sızdırıyorsa toprak doymuş alan sınırındadır; <strong>sulama yapılmamalıdır.</strong></li>
            </ul>
          </li>
          <li><strong>Tansiyometre Kullanımı:</strong> Topraktaki nemin kökler tarafından ne kadar kuvvetle çekildiğini bildiren kılcal cihazlardır. Toprağın emiş basıncını santibar (cb) olarak gösterirler. Bilimsel sulamada en faydalı yardımcılardandır.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6">7. Sonuç: Akıllı Sulama İle Toprağı ve Geleceği Koruyun</h2>
        <p>
          Her bir dekar tarlanın kendine has karakteristiği olduğunu unutmamak gerekir. Rastgele yapılan <strong>toprak tipi sulama</strong> planlaması, tarlanın verimini düşürürken toprağın kimyasal tuzlanmasına ve taban suyunun yükselmesine yol açar.
        </p>
        <p>
          2026 yılında Türk ziraatinde sürdürülebilirliği desteklemek üzere geliştirdiğimiz bilimsel hesaplama algoritmaları, toprağınızın killi, kumlu veya tınlı yapısını analiz ederek meteorolojik verilerle eşleştirir ve size en ideal sonuçları sunar.
        </p>
        <p>
          Uygulamamızın ana sayfasında yer alan <strong>Hassas Sulama Hesaplayıcımızı</strong> kullanarak, kendi tarlanızın toprak tipini ve ürün tipini seçebilir, bugün tarlanıza vermeniz gereken net su derinliğini saniyeler içinde tamamen ücretsiz olarak öğrenebilirsiniz. Kaynaklarimizi tüketmeden, bilimin izinde bol ve bereketli hasatlar dileriz!
        </p>
      </div>
    )
  },
  "zeytin-agaci-sulama-rehberi-mevsime-gore-su-ihtiyaci": {
    title: "Zeytin Ağacı Sulama Rehberi — Mevsime Göre Su İhtiyacı",
    date: "12 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    readTime: "12 dk okuma",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=100&w=2560&auto=format&fit=crop",
    category: "Ağaç Sulama",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium font-sans">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic font-sans">
          Zeytin ağacı (Olea europaea), Akdeniz tarımının can damarıdır. Kuraklığa dayanıklılığı bir efsane olsa da, modern tarımda yüksek verim ve kaliteli ürün elde etmek için kontrollü ve bilimsel bir <strong>zeytin sulama</strong> rejimine ihtiyaç duyulduğu kesinleşmiştir. Doğru zamanda ve miktardaki sulama, meyve kalitesini, tane iriliğini, sürgün uyanışını ve asıl önemlisi zeytinyağındaki polifenol miktarı ile sızma kalitesini doğrudan etkiler.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">1. Zeytinde Su Yönetimi ve Toprak Türünün Önemi</h2>
        <p>
          Zeytin bahçenizin kurulu olduğu arazinin yapısı, suyun kök bölgesinde ne kadar süreyle kalacağını tayin eden ana unsurdur. Sulama yapılmadan önce toprağın fiziksel özellikleri ve <strong>su tutma kapasitesi</strong> mutlaka göz önünde bulundurulmalıdır. Farklı toprak türleri zeytin ağacının kök fizyolojisiyle farklı etkileşimlere girer:
        </p>
        <ul className="list-disc pl-8 space-y-3 mb-6">
          <li>
            <strong>Killi Toprak (Ağır Yapılı Toprak):</strong> Su tutma kapasitesi son derece büyüktür ancak havayolları dardır. Zeytin kökleri aşırı yaş ve doymuş havasız topraklarda uzun kalırsa kök çürüklüğü gelişimine maruz kalabilir. Bu nedenle killi topraklarda sulama aralıkları uzun tutulmalı, drenaja azami özen gösterilmelidir.
          </li>
          <li>
            <strong>Kumlu Toprak (Hafif Yapılı Toprak):</strong> Suyu tutma kabiliyeti oldukça düşüktür; süzek yapısı suyun ve besin maddelerinin hızla derin tabakalara sızmasına yol açar. Bu topraklarda az miktarda ama çok sık aralıklarla sulama yapılarak köklerin nemli çevrede kalması sağlanmalıdır.
          </li>
          <li>
            <strong>Tınlı Toprak (İdeal Dengeli Toprak):</strong> Zeytin ağacının en sevdiği, süzeklikle su tutmanın muhteşem dengelendiği yapıdır. Kök solunumunu engellemeden suyu dengeli bir biçimde muhafaza eder ve yüksek randımanlı meyve gelişimini tetikler.
          </li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">2. Mevsime Göre Zeytin Ağacı Su İhtiyacı</h2>
        <p>
          Zeytin tarımında verimin sırrı, ağacın fenolojik (gelişimsel) evrelerindeki su taleplerini saptamaktan doğar. Su gereksinimi yılın farklı dilimlerinde büyük değişiklikler gösterir:
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-bold text-stone-900">A) Yaz Dönemi (Çekirdek Sertleşmesi ve Meyve Büyümesi)</h3>
        <p>
          Zeytinde suya duyarlılığın en yüksek olduğu, buharlaşmanın tavan yaptığı dönem <strong>yaz</strong> aylarıdır (Haziran - Ağustos arası). Bu evrede iki ana fizyolojik sınır bulunur:
        </p>
        <ol className="list-decimal pl-8 space-y-2 mb-4">
          <li><strong>Haziran ve Temmuz (Çekirdek Sertleşmesi):</strong> Meyvenin çekirdek dokuları bu süreçte tam olarak sertleşir. Bu aşamada bitkide su stresi yaşanması meyvenin buruşup dökülmesine veya küçük kalarak pazar değerini kaybetmesine neden olur.</li>
          <li><strong>Ağustos (Yağ Sentezi ve Hücre İrimesi):</strong> Çekirdeği sertleşen meyvede yağ birikimi ve etli kısmın büyümesi hız kazanır. Düzenli <strong>zeytin sulama</strong> sayesinde bitkinin fotosentez gücü düşmez, böylece hem dekar başı tonaj artar hem de meyve içindeki net yağ yüzdesi yükselir.</li>
        </ol>

        <h3 className="text-2xl mt-8 mb-4 font-bold text-stone-900">B) Sonbahar ve Hasat Dönemi (Yağlanmanın Tamamlanması)</h3>
        <p>
          Eylül ve Ekim aylarında zeytin renk dönümüne (yeşilden mor/siyaha) girer ve yağ sentezinin en kritik birikim devresi yaşanır. Bu <strong>hasat dönemi</strong> öncesinde yapılacak sulamaların yönetimi zeytinyağı kalitesine yön verir:
        </p>
        <p>
          Hasattan yaklaşık 2-3 hafta önce fazla sulamalar durdurulmalıdır. Ağacın hasat öncesinde aşırı deregede sulanması, toplanan meyvelerdeki su oranının artmasına ve yağa işleme sırasında randımanın düşük görünmesine yol açar. Ayrıca fazla su, yağdaki aromatik polifenollerin dökülerek zayıf bir asit profili kalmasına sebep olabilir. Ancak, aşırı kurak giden sonbaharlarda meyve büzüşmesini engellemek için hafif can suları verilebilir.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-bold text-stone-900">C) Kış Dönemi (Dinlenme Evresi ve Su Birikimi)</h3>
        <p>
          Zeytin ağacı <strong>kış</strong> mevsiminde vejetatif faaliyetlerini askıya alarak kış uykusuna dalar. Doğal yağışlar bu süreçte toprak profilini neme doyurmak için yeterlidir. Dolayısıyla ek sulamaya gerek duyulmaz. Kış döneminde köklerin suya boğulması ağaçların direncini düşürerek don zararlarını tetikleyebilir. Sadece sıra dışı kuraklık yaşanan kışlarda, toprak taban nemini korumak için çok kısıtlı seviyede kontrol yapılmalıdır.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-bold text-stone-900">D) İlkbahar Dönemi (Filizlenme ve Çiçeklenme)</h3>
        <p>
          Mart-Mayıs aralığında zeytinler yeni sürgün uyanışına girer ve çiçek gözlerini oluşturur. Kış yağışlarının noksan kaldığı yıllarda bu dönemde yapılacak hafif bir sulama tomurcuk zenginliğini artırır, böylece döküntüsüz ve gür çiçek açımını pekiştirir.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">3. Zeytinlikler İçin Altın Değerinde Damla Sulama Tavsiyeleri</h2>
        <p>
          Geleneksel salma sulama veya vahşi sulama yöntemleri, zeytin ağacının kök boğazında mantar oluşumuna (Verticillium ve Phytophthora gibi) doğrudan davetiye çıkarır. Suyu koruyan, tuzu azaltan ve yüksek verim sağlayan en iyi yöntem damla sulamadır.
        </p>
        <p>
          Zeytin bahçenizde uygulayabileceğiniz uzman <strong>damla sulama tavsiyeleri</strong> aşağıdadır:
        </p>
        <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8 my-8 space-y-6">
          <div className="flex gap-4 items-start">
            <span className="bg-[var(--green-mid)] text-white font-black text-center w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
            <div>
              <h4 className="text-xl font-bold text-stone-900 mb-2">Çift Sıra Lateral Boru Çekin:</h4>
              <p className="text-stone-600 mb-0">Yaşlı ağaçların kökleri geniştir. Tek sıra boru yetersiz nemlenme alanı yaratır. Ağaç sırasının her iki yanından, gövdeden 1 metre mesafeyle sarkan çift lateral hat döşemek en mantıklı adımdır.</p>
            </div>
          </div>
          <div className="border-t border-stone-200 pt-6 flex gap-4 items-start">
            <span className="bg-[var(--green-mid)] text-white font-black text-center w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
            <div>
              <h4 className="text-xl font-bold text-stone-900 mb-2">Gövdeden Uzak Kalın:</h4>
              <p className="text-stone-600 mb-0">Damlatıcı memelerini gövde dibine yığmayın. Gövdenin nemli kalması kök boğazı çürümelerine zemin hazırlar. Islatmayı ağacın taç izdüşümünde homojen yaymak en sağlıklısıdır.</p>
            </div>
          </div>
          <div className="border-t border-stone-200 pt-6 flex gap-4 items-start">
            <span className="bg-[var(--green-mid)] text-white font-black text-center w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
            <div>
              <h4 className="text-xl font-bold text-stone-900 mb-2">Basınç Ayarlı (PC) Damlatıcı Seçimi:</h4>
              <p className="text-stone-600 mb-0">Engebeli veya meyilli arazilerde, her bir ağacın satır başından satır sonuna dek eşit debide (örneğin saatte tam 4 litre) su alabilmesi için basınç kompanse edici (PC) damlama borularını tercih edin.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">4. Zeytin Su Tüketim Yüzdeleri ve Planlama Tablosu</h2>
        <p>
          Aşağıdaki tabloda, Akdeniz iklim bölgesinde yer alan olgun bir zeytin ağacının gelişim evrelerine göre su tüketim payı ve sulama önem düzeyi gösterilmektedir:
        </p>
        <div className="overflow-x-auto my-8 border border-stone-200 rounded-2xl">
          <table className="min-w-full divide-y divide-stone-200">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-widest">Büyüme Evresi</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-widest">Zaman Aralığı</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-stone-500 uppercase tracking-widest">Su Payı (%)</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-stone-500 uppercase tracking-widest">Öncelik Derecesi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-stone-100">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-stone-900">Uyanış ve Göz Kabarması</td>
                <td className="px-6 py-4 text-sm text-stone-600">Mart - Nisan</td>
                <td className="px-6 py-4 text-right text-sm text-stone-600">%15 - %20</td>
                <td className="px-6 py-4 text-center"><span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">Orta</span></td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-stone-900">Salkım Oluşumu ve Çiçek</td>
                <td className="px-6 py-4 text-sm text-stone-600">Mayıs</td>
                <td className="px-6 py-4 text-right text-sm text-stone-600">%10 - %15</td>
                <td className="px-6 py-4 text-center"><span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full">Kritik</span></td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-stone-900">Çekirdek Sertleşme Safhası</td>
                <td className="px-6 py-4 text-sm text-stone-600">Haziran - Temmuz</td>
                <td className="px-6 py-4 text-right text-sm text-stone-600">%35 - %40</td>
                <td className="px-6 py-4 text-center"><span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full">Çok Yüksek</span></td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-stone-900">Yağ Entegrasyonu ve Etlenme</td>
                <td className="px-6 py-4 text-sm text-stone-600">Ağustos - Eylül</td>
                <td className="px-6 py-4 text-right text-sm text-stone-600">%25 - %30</td>
                <td className="px-6 py-4 text-center"><span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">Yüksek</span></td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-stone-900">Hasat Öncesi Dengelenme</td>
                <td className="px-6 py-4 text-sm text-stone-600">Ekim - Kasım</td>
                <td className="px-6 py-4 text-right text-sm text-stone-600">%5 - %10</td>
                <td className="px-6 py-4 text-center"><span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">Hafif/Kısıtlı</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">5. Bilimsel Metotlarla Günlük Su Hesaplama Formülü</h2>
        <p>
          Ziraat mühendisleri, zeytin ağacının günlük net su tüketimini (ET_bitki) hesaplarken referans evapotranspirasyon hızı ile bitki ve taç katsayılarını çarparak kesin bir formül elde ederler:
        </p>
        <div className="bg-[var(--green-light)] p-8 rounded-[32px] my-6 border-2 border-[var(--green-mid)]/20 text-center shadow-inner">
          <p className="text-2xl font-black text-[var(--green-dark)] tracking-wider mb-2">
            ET_bitki = ET_o × K_c × K_r
          </p>
        </div>
        <p className="mb-4">Bu değişkenlerin açılımları şöyledir:</p>
        <ul className="list-disc pl-8 space-y-2 mb-6">
          <li><strong>ET_o:</strong> Milimetre cinsinden günlük referans bitki buharlaşma parametresi.</li>
          <li><strong>K_c:</strong> Zeytin bitki katsayısı (yazın ortalama 0.55 civarında seyreder).</li>
          <li><strong>K_r:</strong> Ağacın kaplama oranı katsayısı (sıra araları ve taç izdüşüm alanına bağlıdır).</li>
        </ul>

        <div className="border hover:border-[var(--green-mid)] transition-colors p-8 rounded-[32px] bg-white group my-6">
          <h3 className="text-2xl font-black text-stone-900 group-hover:text-[var(--green-dark)] transition-colors mb-4">Pratik Örnek Hesaplama</h3>
          <p className="text-stone-500 font-bold">
            Temmuz ayında, günlük referans buharlaşma miktarının 8 mm olduğunu varsayalım. Sürgün taç çapı 4 metre (yaklaşık 12.5 m² alan) büyüklüğündeki olgun bir zeytin ağacımız için K_c = 0.55 ve örtü faktörü K_r = 0.60 olarak belirlensin:
          </p>
          <div className="bg-stone-50 p-6 rounded-2xl font-mono text-sm leading-relaxed text-stone-700 my-4 border">
            ET_o = 8 mm/gün<br />
            K_c = 0.55<br />
            K_r = 0.60<br />
            Taç Alanı = 12.5 m²<br />
            <br />
            Günlük Su Tüketimi (ET_bitki) = 8 × 0.55 × 0.60 = 2.64 mm/gün<br />
            Ağaç Başına Günlük İhtiyaç = 2.64 mm × 12.5 m² = 33 Litre / ağaç / gün
          </div>
          <p className="text-stone-600 mb-0">
            <strong>Analiz Sonucu:</strong> Bu ağaca her gün için 33 litre su ulaştırılmalıdır. Haftalık 2 sulama yapılıyorsa, sulama günü başına ağaç başına düşmesi gereken miktar <strong>(33 × 7) / 2 = 115.5 litredir.</strong> Bu su, tınlı topraklarda damla borularının yaklaşık 3.5-4 saat açık tutulmasıyla gövdeden sızmadan ağaca tam olarak yedirilir.
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">6. Sulamanın Zeytinyağı Organoleptik Özelliklerine Faydası</h2>
        <p>
          Suyun zeytinyağı asiditesini "sulandırdığı" ve seyreltiği anlayışı tamamen yanlıştır. Bilimsellikten uzak bu inanışın aksine kontrollü sulama:
        </p>
        <ul className="list-disc pl-8 space-y-3 mb-6">
          <li><strong>Yüksek Polifenol Korunumu:</strong> Kontrollü kısıntılı sulama (CDI), ağacın aşırı strese girmeden hafif fizyolojik zorlanma hissetmesini sağlar. Bu şokla ağaç, yağa acılık ve şifalı yakıcılık veren antioksidan polifenolleri sentezler.</li>
          <li><strong>Asit Değeri Kararlılığı:</strong> Kuraklık nedeniyle dökülen ve topraktan toplanan zeytinlerin asidi yüksek olur. Ağaçta diri kalarak hasat edilen sağlıklı zeytinin yağı kusursuz bir asit kararlılığı (%0.2 - %0.5) gösterir.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">7. Sonuç: Akıllı Gelecek İçin Bilimsel Tarım</h2>
        <p>
          Zeytin tarımında verimin ve asırlık ömrün sınırlarını zorlamak, ancak doğru <strong>zeytin sulama</strong> rejimleri kurmakla gerçekleşir. 2026 yılı tarım ufkunda, doğanın dengelerini gözeterek suyu milimetrik ölçeklemek hem üreticilerimizi kalkındıracak hem de kıymetli su kaynaklarımızı koruyacaktır.
        </p>
        <p>
          Hemen web sitemizin ana sayfasındaki <strong>Akıllı Tarım Sulama Hesaplayıcımızı</strong> ziyaret edip tarlanızın toprak türünü, ürün cinsini ve konumunuzun günlük buharlaşma değerlerini girerek ihtiyaç duyduğunuz net sulama miktarını saniyeler içinde ücretsiz ve bilimsel formüllerle hesaplayabilirsiniz!
        </p>
      </div>
    )
  },
  "kuraklik-doneminde-ciftci-ne-yapmali-sulama-stratejileri": {
    title: "Kuraklık Döneminde Çiftçi Ne Yapmalı? Sulama Stratejileri",
    date: "13 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    readTime: "18 dk okuma",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80",
    category: "Sulama Stratejileri",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium select-none">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic">
          İklim krizinin, kuruyan nehirlerin ve azalan yer altı su seviyelerinin gölgesinde modern tarım yapmak her geçen gün daha da zorlaşıyor. 2026 yılı tarım sezonunda çiftçilerimizin en büyük sınavı olan kuraklıkla mücadele etmek, geleneksel yöntemleri geride bırakıp bilimsel sulama stratejilerini ve teknolojiyi hayata geçirmekle mümkündür. Bu rehberde, kuraklık döneminde maksimum su tasarrufu sağlamak, damla sulama entegrasyonu yapmak ve kuraklığa dayanıklı bitkiler ile tarlamızı korumak için uygulayabileceğimiz en pratik çözümleri derledik.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">1. Kuraklık Döneminde Yeni Nesil Tarım Paradigmaları</h2>
        <p>
          Tarım sektörü, dünya genelindeki tatlı su kaynaklarının yaklaşık %70'ini tüketmektedir. Bu devasa oran, su kaynaklarının azaldığı kuraklık dönemlerinde tarımsal üretimi ilk ve en ağır darbeyi alan sektör haline getirmektedir. Çiftçilerimizin "suyu olabildiğince çok vermek iyidir" algısından sıyrılarak, "suyu bitkinin tam ihtacı kadar ve doğru zamanda vermek zorundayız" bilincine ulaşması gerekmektedir. İşte tam bu aşamada modern <strong>kuraklık sulama</strong> teknikleri devreye girmektedir.
        </p>
        <p>
          Geleneksel vahşi sulama (salma sulama) yöntemleri hem su kaynaklarının %60'tan fazlasının buharlaşarak veya sızıntıyla heba olmasına yol açmakta hem de toprağın yıkanarak tuzlanmasına ve verimsizleşmesine neden olmaktadır. Oysa ki modern <strong>kuraklık sulama</strong>, tarladaki su bütçesini milimetrik olarak yöneten, iklim verilerini izleyen ve bitki stresini kontrol altında tutan gelişmiş bir su yönetimi disiplinidir.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">2. Kuraklık Sulama Nedir? Bilimsel Temelleri</h2>
        <p>
          <strong>Kuraklık sulama</strong>, kısıtlı su koşullarında bitki fizyolojisini bozmadan verim kaybını minimumda tutmayı amaçlayan, toprak nemini sürekli gözeterek yapılan planlı su uygulamasıdır. Bu teknik, rastgele sulama yapmanın aksine, toprak nem sensörleri, evapotranspirasyon (buharlaşma) hesaplamaları ve bitkinin kritik büyüme evrelerini temel alır.
        </p>
        <p>
          Örneğin, her bitkinin su stresine karşı aşırı duyarlı olduğu "kritik dönemler" vardır. Mısır için bu dönem püskül çıkarma ve tane doldurma aşamasıyken, buğday için başaklanma ve sapa kalkma dönemidir. Bu kritik dönemler dışında uygulanan kontrollü ve kısıtlı su miktarı, bitki büyümesini çok az etkilerken devasa miktarda suyun korunmasını sağlar. Bu yaklaşım, bilimsel tarım literatüründe Kısıtlı Sulama (Deficit Irrigation) olarak adlandırılır ve başarılı bir <strong>kuraklık sulama</strong> stratejisinin omurgasını oluşturur.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">3. Maksimum Su Tasarrufu İçin Uygulanabilecek Temel Adımlar</h2>
        <p>
          Bir tarım işletmesinde veya tarlada radikal bir <strong>su tasarrufu</strong> gerçekleştirmek, sadece sulama yöntemini değiştirmekle sınırlı değildir. Bu, toprağın hazırlanmasından ekilecek tohumun seçimine, sulama saatlerinden toprak yüzeyinin korunmasına kadar uzanan bütüncül bir planlama gerektirir:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Toprak Organik Maddesini Artırmak:</strong> Organik madde oranı (humus, kompost, çiftlik gübresi) %1 artan bir toprak, dönüm başına yaklaşık 16.000 litre daha fazla su tutma kapasitesine sahip olur. Organik maddeyi artırmak, kuraklık sulama süreçlerinde toprağın süngerimsi yapısını pekiştirerek suyun derine kaçmasını önler.</li>
          <li><strong>Malçlama Yapmak:</strong> Toprak yüzeyinin sap, saman, kuru ot veya özel biyobozunur plastik örtülerle kaplanması olan malçlama, toprak yüzeyinden gerçekleşen buharlaşmayı (evaporasyon) %40 ila %60 oranında engeller. Bu sayede toprak nemini uzun süre korur ve sulama aralıklarını ciddi oranda uzatır.</li>
          <li><strong>Gece Sulaması Uygulamak:</strong> Gündüz güneş altında yapılan sulamalarda suyun %30'a yakını daha bitki köküne ulaşmadan havaya karışır. Sulamaların akşam güneş battıktan sonra veya sabahın çok erken serin saatlerinde yapılması, buharlaşma kayıplarını sıfıra yakın bir seviyeye indirerek doğrudan <strong>su tasarrufu</strong> sağlar.</li>
          <li><strong>Rüzgar Perdeleri Oluşturmak:</strong> Tarlanın hakim rüzgar yönüne dik olarak dikilecek ağaç veya çit gibi rüzgar perdeleri, mikro-klimayı yumuşatarak bitkilerin rüzgar etkisiyle aşırı su kaybetmesini (terleme/transpirasyon) yavaşlatır.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">4. Damla Sulama: Kuraklık Döneminde Suyu Milimetrik Yönetmek</h2>
        <p>
          Kuraklıkla mücadelede çiftçinin sahip olabileceği en güçlü silah şüphesiz <strong>damla sulama</strong> sistemleridir. Damla sulama, suyu ve bitki besin elementlerini (fertigasyon) borular yardımıyla doğrudan bitkinin kök bölgesine, düşük basınçla ve küçük damlalar halinde veren sistemdir.
        </p>
        <p>
          Geleneksel sulama yöntemlerinde tarlanın tamamı ıslatılırken, <strong>damla sulama</strong> sisteminde tarlanın sadece %20 ila %30'luk bir alanı (sadece kök bölgesi) nemlendirilir. Bu durum, yabancı otların büyümesini engeller, toprak yapısının sıkışmasını önler ve toprak havalanmasını maksimum düzeyde tutar. En önemlisi de, su kullanım verimliliğini %95'in üzerine çıkarır.
        </p>
        <div className="bg-[var(--green-light)] p-8 rounded-[32px] my-10 border-2 border-[var(--green-mid)]/20 shadow-sm">
          <h4 className="text-xl font-black mb-4">Damla Sulamanın Kuraklıkta Sağladığı 4 Temel Avantaj:</h4>
          <ol className="list-decimal pl-6 space-y-2 text-[var(--green-dark)] font-bold">
            <li><strong>Buharlaşma Kaybının Önlenmesi:</strong> Su doğrudan yapraklara veya açık toprağa değil, bitki kökünün hemen yanına verildiği için buharlaşma minimumdur.</li>
            <li><strong>Derine Sızmanın Önlenmesi:</strong> Kontrollü debiye sahip damlatıcılar (örneğin saatte 1.6 veya 2.0 litre veren basınç ayarlı damlatıcılar) kullanılarak suyun yer çekimiyle bitki kök derinliğinin altına sızması engellenir.</li>
            <li><strong>Rüzgar Etkisinin Sıfırlanması:</strong> Yağmurlama sulamada rüzgarlı havalarda su her yana dağılır ve homojenlik bozulur. Damla sulama rüzgardan kesinlikle etkilenmez.</li>
            <li><strong>Toprak Altı Damla Sulama (SDI) Teknolojisi:</strong> Damlatıcı boruların doğrudan toprak altına (20-40 cm derine) gömüldüğü bu sistem, yüzeyde hiç ıslaklık bırakmayarak sıfır buharlaşma ile çalışır. Kuraklık sulama konusunda ulaşılabilecek en ileri seviyedir.</li>
          </ol>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">5. Kuraklığa Dayanıklı Bitkiler ve Ürün Seçim Stratejileri</h2>
        <p>
          Suyun kısıtlı olduğu dönemlerde sadece sulama yöntemini optimize etmek yetmeyebilir; aynı zamanda ekilen ürün grubunu da gözden geçirmek gerekir. Bir bölgenin su bütçesi ile ekilen bitkilerin su tüketimi arasında denge kurmak şarttır. Su tüketimi çok yüksek olan bitkiler yerine <strong>kuraklığa dayanıklı bitkiler</strong> tercih edilerek sürdürülebilir tarım yapılabilir.
        </p>
        <p>
          Peki kuraklık döneminde hangi ürünleri ve nasıl seçmeliyiz?
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Sorgum ve Sorgum-Sudan Otu Melezi:</strong> Sılajlık mısır yetiştirmek yüksek miktarda su gerektirir. Hayvancılık kaba yem ihtiyacı için mısıra en iyi alternatif sorgumdur. Sorgum, mısıra göre yarı yarıya daha az suya ihtiyaç duyar ve kuraklık döneminde uykuda kalıp su bulduğunda gelişimine devam etme yeteneğine sahiptir.</li>
          <li><strong>Yemeklik Tane Baklagiller:</strong> Nohut, yeşil mercimek ve kırmızı mercimek, çok az su tüketen ve doğası gereği toprağa azot bağlayan muazzam <strong>kuraklığa dayanıklı bitkiler</strong> sınıfındandır. Bu bitkiler kuru tarım şartlarında dahi tatminkar verimler sunarlar.</li>
          <li><strong>Yağlı Tohumlar Pygma Bitkiler:</strong> Aspir ve kanola gibi kökleri derine inen yağlı tohumlu bitkiler kış yağışlarını çok iyi değerlendirir ve ilkbahar kuraklıklarından daha az etkilenir. Ayrıca son yıllarda popülaritesi artan karabuğday da kısa vejetasyon süresi ve düşük su tüketimiyle mükemmel bir seçenektir.</li>
          <li><strong>Kuraklığa Dayanıklı Anaç ve Çeşit Seçimi:</strong> Çok yıllık meyve yetiştiriciliğinde (zeytin, badem, bağcılık, antep fıstığı) kuraklığa dayanıklı anaçların (örneğin bademde GF677, zeytinde belirli yabani anaçlar) seçilmesi, ağaçların derinlerden su çekme yeteneğini artırır.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">6. Regüle Edilmiş Kısıtlı Sulama (RDI) Uygulaması</h2>
        <p>
          <strong>Kuraklık sulama</strong> taktikleri arasında yer alan Regüle Edilmiş Kısıtlı Sulama (RDI), bitkinin kalite parametrelerini bozmadan su kullanımını minimize etmek için kullanılır. Özellikle zeytin, asma (üzüm) ve meyve bahçelerinde yaygın uygulanan bu yöntemde, bitkinin vejetatif büyüme hızı kesilmek istendiğinde su kasıtlı olarak kısılır.
        </p>
        <p>
          Örneğin, bağcılıkta tane dökümünden sonra tanelerin olgunlaşmaya başladığı dönemde hafif su stresi yaratılması, asmanın enerjisini yaprak büyütmek yerine tanedeki şeker ve aroma maddelerini artırmaya yönlendirmesini sağlar. Bu sayede hem sulama bütçesinden %25-30 tasarruf edilir hem de daha kaliteli üzümler elde edilir. Ancak burada kritik kural şudur: Kısıntı oranları kulaktan dolma bilgilerle değil, bilimsel hesaplama araçlarıyla belirlenmedir.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">7. Çiftçi İçin Adım Adım Kuraklık Eylem Planı</h2>
        <p>
          Önümüzdeki üretim sezonunda tarlanızı kuraklıktan korumak için şu adımları hemen bugünden atmaya başlayın:
        </p>
        <ol className="list-decimal pl-8 space-y-3">
          <li><strong>Toprağınızı Analiz Ettirin:</strong> Toprağınızın kum, kil ve organik madde oranını öğrenin. Bu, tarlanızın su tutma kapasitesini ve bir sulamada en fazla kaç mm su vermeniz gerektiğini belirler.</li>
          <li><strong>Vahşi Sulamayı Tamamen Durdurun:</strong> İmkanlar dahilinde damla sulama sistemlerine geçiş yapın. Devletimizin dönüm bazlı modern sulama sistemleri yatırımlarına sunduğu %50 hibe desteklerini araştırın ve bu fırsatlardan yararlanın.</li>
          <li><strong>Akıllı Hesaplama Araçlarından Yararlanın:</strong> Tarım Sulama Hesaplayıcımızı kullanarak her gün tarlanızın kaybettiği nem miktarını (ETc) hesaplayın. Ne fazla ne eksik, sadece bitkinizin havaya verdiği su miktarı kadar sulama yapın.</li>
          <li><strong>Alternatif Ürünleri Planlayın:</strong> Çok yoğun sulama gerektiren ürünler yerine pazar değeri yüksek ve su tüketimi düşük kuraklığa dayanıklı alternatif bitkileri ürün deseninize ekleyin.</li>
        </ol>

        <div className="bg-[var(--green-dark)] text-white p-10 rounded-[40px] my-10 shadow-lg border border-[var(--green-mid)]">
          <h4 className="text-2xl font-black mb-4 text-white">Unutmayın: Su Hayattır ve Sınırlıdır</h4>
          <p className="font-bold text-white/90">
            Gelecek nesillere işlenebilir, verimli ve canlı topraklar bırakmak bizim elimizde. Sulamada yapacağımız her bir birim <strong>su tasarrufu</strong>, sadece faturamızı düşürmekle kalmayacak, nehirlerimizin, göllerimizin ve yer altı sularımızın ömrünü uzatacaktır. Bilimin ve teknolojinin ışığında akıllı tarım yapalım, doğayı ve geleceğimizi koruyalım.
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">8. Sonuç</h2>
        <p>
          Kuraklık artık geçici bir doğal afet değil, tarımın kalıcı bir gerçeğidir. Bu gerçekle savaşmanın yolu inat etmek değil, uyum sağlamaktır. Gelişmiş <strong>kuraklık sulama</strong> teknikleri, yüksek verimli <strong>damla sulama</strong> altyapısı ve tarlamıza uygun <strong>kuraklığa dayanıklı bitkiler</strong> ile kuraklığı yönetmek kendi elimizdedir. 
        </p>
        <p>
          Hemen şimdi anasayfamızı ziyaret ederek, tarlanız, konumunuz ve bitki türünüz için bugün uygulamanız gereken net sulama sürelerini saniyeler içinde bilimsel olarak hesaplayabilirsiniz! Bol, bereketli ve sürdürülebilir bir tarım sezonu dileriz.
        </p>
      </div>
    )
  },
  "patates-sulama-miktari-ve-takvimi": {
    title: "Patates Sulama Miktarı ve Takvimi: Bilimsel Sulama Rehberi",
    date: "14 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    readTime: "16 dk okuma",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    category: "Yumru Tarımı",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium select-none">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic">
          Patates (Solanum tuberosum) tarımında maksimum dekar verimine ulaşmak ve pazar değeri yüksek, içi dolu, şekli düzgün yumrular elde etmek tesadüflere bırakılamaz. Saçak kök yapısıyla neme karşı son derece duyarlı olan patates bitkisinin su yönetimini bilimsel bir çerçeveye oturtmak, karlı bir üretimin anahtarıdır. Bu kapsamlı rehberde, patates bitkisinin kritik büyüme dönemleri boyunca su ihtiyaçlarını, can damarı niteliğindeki günlük su ihtiyacı katsayılarını ve modern sulama yöntemleri ile su tasarrufunun püf noktalarını milim milim inceledik.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">1. Patates Tarımında ve Yumru Gelişiminde Suyu Doğru Yönetmenin Önemi</h2>
        <p>
          Patates, besin zincirinin en temel karbonhidrat ve enerji kaynaklarından biridir. Ülkemizde ve dünyada geniş üretim alanlarına sahip olan patatesin fizyolojik yapısı, onu diğer tarla bitkilerinden ayıran hassas bir özelliğe sahiptir: Sığ ve sınırlı saçak kök sistemi. Patates köklerinin %85 ila %90'ı toprağın ilk 30-45 cm'lik katmanında yoğunlaşmıştır. Bu durum, bitkinin derinlerdeki yer altı sularından faydalanma kabiliyetini sınırlar ve onu toprağın hemen üst tabakasındaki nem dalgalanmalarına karşı son derece kırılgan hale getirir.
        </p>
        <p>
          Kontrollü ve planlı bir <strong>patates sulama</strong> programı yapılmadığında, toprak neminin aşırı düşmesi veya aşırı yükselmesi bitkide doğrudan fizyolojik stres yaratır. Nemin yetersiz olduğu dönemlerde stolon gelişimi durur, yumru irileşmesi kesintiye uğrar ve yumrularda şekilsizleşmeler gözlenir. Aşırı su verilmesi durumunda ise kök bölgesinin havasız kalması (anoksi), yumru kabuğundaki lentisellerin (gözeneklerin) aşırı açılmasına, bakteriyel ve mantari kök çürüklüğü hastalıklarına davetiye çıkarır. Dolayısıyla, patates tarımında suyun miktarını ve sıklığını tam ihtiyaca göre belirlemek hayati önem taşır.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">2. Patates Bitkisinin Kritik Büyüme Dönemleri</h2>
        <p>
          Patates bitkisinin ömrü boyunca yaşadığı fizyolojik dönüşümler, su ihtiyacının derecesini de belirler. Sulama stratejinizi planlarken, bitkinin hangi gelişim aşamasında olduğunu bilmeli ve sulama takviminizi bu <strong>büyüme dönemleri</strong> kapsamında şekillendirmelisiniz:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Filizlenme ve Çıkış Dönemi (I. Evre):</strong> Dikimle başlayan ve filizlerin toprak yüzeyine ulaşarak yeşil aksam oluşturmaya başladığı evredir. Bu dönemde bitkinin ana güç kaynağı tohumluk yumrunun kendi bünyesindeki su ve besin rezervleridir. Çıkış öncesi aşırı su verilmesi, toprağın soğumasına, balçıklaşmasına ve sonuç olarak tohumların çürümesine (Karabacak hastalığı vb.) yol açar. Bu dönemde hafif nem yeterlidir.</li>
          <li><strong>Vejetatif Gelişme Dönemi (II. Evre):</strong> Gövde, yaprak dalları ve toprak altında stolonların (yumrunun bağlanacağı uzantılar) hızla boy attığı dönemdir. Yaprak alanının (taç yapısının) genişlediği bu safhada fotosentez hızı artar ve bitki yavaş yavaş dışarıdan düzenli suya ihtiyaç duymaya başlar.</li>
          <li><strong>Yumru Bağlama (Tuber İnisiasyonu) Dönemi (III. Evre):</strong> Ekşimenin başlamasıyla stolon uçlarının şişerek minik patates yumrularına (fındık-ceviz büyüklüğünde) dönüştüğü, bitki hayatının en kritik 10-15 günlük dönemidir. Bu evrede meydana gelecek su stresi, bağlanacak yumru sayısını radikal biçimde azaltır. Toprak nemi sürekli tarla kapasitesinin %70-80 seviyesinde tutulmalıdır.</li>
          <li><strong>Yumru Büyüme (İrileşme) Dönemi (IV. Evre):</strong> Hücre bölünmesi ve genişlemesiyle birlikte yumruların nişasta depolayarak hacimsel ve kütlesel olarak en hızlı büyüdüğü evredir. Su tüketiminin zirve yaptığı, <strong>günlük su ihtiyacı</strong> miktarının en yüksek olduğu dönem bu dönemdir. Bu safhada yaşanacak su düzensizlikleri yumrularda bölünmelere, iç boşalmasına (kovuklaşma) ve büyüme durduğu için ardından gelen sulamayla birlikte şekilsiz yan yumru vermelere (ikincil büyüme) sebep olur.</li>
          <li><strong>Olgunlaşma ve Hasat Hazırlığı (V. Evre):</strong> Yaprakların sararmaya ve kurumaya başladığı, yumrudaki nişastanın olgunlaştığı ve kabuğun kalınlaştığı (pudra verme/kabuk bağlama) son dönemdir. Hasattan 2 ila 3 hafta önce sulama tamamen kesilmelidir. Bu sayede yumru kabuğu olgunlaşarak depolama ömrünü uzatır ve holds (mekanik hasarlara) karşı direnç kazanır.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">3. Patatesin Evrelere Göre Günlük Su İhtiyacı ve Kc Katsayıları</h2>
        <p>
          Farklı gelişim aşamalarda patatesin su tüketim miktarı değişkenlik gösterir. Tarımsal sulamada bitkinin gerçek su tüketimini (ET) hesaplamak için konumun referans buharlaşma hızı (ETo) ile patatese özel bitki katsayısı (Kc) çarpılır. 
        </p>
        <p>
          Güvenli bir <strong>patates sulama</strong> planı kurmak isteyen çiftçilerimizin dikkate alması gereken <strong>günlük su ihtiyacı</strong> değerleri şu şekildedir:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Erken Dönem (0-30 Gün):</strong> Bitki küçük, toprak yüzeyi büyük oranda açıktır. Günlük su tüketimi düşüktür; ortalama 1.5 - 2.5 mm arasındadır. Bu aşamada bitki katsayısı (Kc) 0.45-0.50 civarında seyreder.</li>
          <li><strong>Hızlı Vejetatif Gelişim (30-50 Gün):</strong> Yaprak örtüsü tarlayı kaplamaya başlar. Günlük su tüketimi 3.0 - 4.5 mm seviyelerine tırmanır (Kc: 0.75 - 0.85).</li>
          <li><strong>Yumru Bağlama ve Tam Gelişme (50-80 Gün):</strong> Bitki tarlayı %100 oranında örtmüştür ve yumrular oluşmaktadır. Günlük su tüketimi zirveye fırlar; iklime bağlı olarak günlük 6.0 - 8.0 mm (dönüm başına günde 6 ila 8 ton su) aralığında su tüketilir. Bu dönemde Kc katsayısı en yüksek değerine ulaşır (Kc: 1.15).</li>
          <li><strong>İrileşme ve Olgunlaşma Başlangıcı (80-110 Gün):</strong> Yumrular son boyutuna ulaşırken yaprak faaliyetleri yavaşlar. Günlük su tüketimi 3.5 - 4.5 mm seviyelerine geriler (Kc: 0.80 - 0.90).</li>
          <li><strong>Hasat Öncesi Sararma (110+ Gün):</strong> Yapraklerin fotosentezi biter. Günlük su tüketimi 1.5 - 2.0 mm'nin altına hızla çöker (Kc: 0.20 - 0.35).</li>
        </ul>

        <div className="bg-[var(--green-light)] p-8 rounded-[32px] my-10 border-2 border-[var(--green-mid)]/20 shadow-sm">
          <h4 className="text-xl font-black mb-4">Bir Dönüm Patates İçin Sezonluk Toplam Su Bütçesi:</h4>
          <p className="font-bold text-[var(--green-dark)] leading-relaxed">
            Patates bitkisinin dikimden hasada kadar ihtiyaç duyduğu toplam saf su miktarı bölgenin iklim koşullarına, rüzgara ve toprak yapısına göre 500 mm ile 750 mm (dönüm başına 500 ila 750 ton su) arasında değişim gösterir. Bu ihtiyacın ne kadarının doğal yağışlarla karşılandığı hesap edilmeli, geriye kalan açık mutlaka planlı sulama suyundan verilmelidir.
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">4. Patates Tarımında En Etkili Sulama Yöntemleri</h2>
        <p>
          Patatesin hassas kök fizyolojisi göz önüne alındığında, suyun tarlaya nasıl dağıtılacağı verim oranını doğrudan belirler. Patateste yaygın kullanılan modern ve geleneksel <strong>sulama yöntemleri</strong> şunlardır:
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">A) Damla Sulama Sistemi (En Verimli Yöntem)</h3>
        <p>
          Damla sulama, suyu ve suda çözülebilen gübreleri (azot, potasyum, kalsiyum vb.) doğrudan patates köklerinin bulunduğu dar banta yavaş ve düşük basınçla ileten en rasyonel sistemdir. <strong>patates sulama</strong> yöntemleri arasında su kullanım etkinliğini %95-98 ile en tepeye çıkaran bu sistem, yaprakları ıslatmadığı için mildiyö ve yaprak lekesi hastalıklarının gelişim şansını asgariye indirir. Toprağın kaymak tabakası oluşturmasını ve sıkışmasını önleyerek, yumruların rahatça büyüyeceği gevşek ve havadar bir toprak yapısı sunar.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">B) Pivot ve Yağmurlama Sulama</h3>
        <p>
          Geniş düzlüklerdeki büyük patates tarlalarında oldukça yaygındır. Homojen bir su dağılımı sağlar ve toprağın nemini hızlıca tarla kapasitesine ulaştırır. Ancak rüzgarlı havalarda homojenlik bozulabilir ve suyu havaya püskürttüğü için buharlaşma kaybı görece yüksektir. En büyük dezavantajı ise yaprak sirkülasyonunu ıslatmasıdır. Yağmurlama yönteminde hastalık riskini düşürmek adına, sulama gece geç saatlerde veya sabahın ilk ışıklarında yapılmalı, yaprakların günün sıcak saatlerine girmeden kurumuş olması sağlanmalıdır.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">C) Karık (Karıklara Sızdırma) Sulama</h3>
        <p>
          Geleneksel ve su sarfiyatı çok yüksek bir yöntemdir. Suyu kontrol etmek zordur, suyun dağılım homojenliği çok geridedir ve tarlanın baş kısmı çamurken son kısmı kuru kalabilir. Patateste köklerin boğulmasına ve yüksek tuz birikimine yol açtığı için ticari modern işletmelerde kesinlikle önerilmemektedir.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">5. Patates Sulama Takvimi ve Evre-Evre Yönetim Matrisi</h2>
        <p>
          Aşağıdaki bilimsel tabloda, optimum verim hedeflenen bir patates üretiminde büyüme dönemlerine göre bitki katsayıları, tahmini sulama aralıkları ve su ihtiyacı kritik seviyeleri listelenmiştir:
        </p>

        <div className="overflow-x-auto my-8 border-2 border-stone-100 rounded-2xl shadow-sm">
          <table className="min-w-full border-collapse bg-white">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Gelişim Evresi</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Bitki Katsayısı (Kc)</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Günlük Su Tüketimi</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Sıklık (Kumlu/Tınlı)</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Verim Duyarlılığı</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Çıkış / Erken Dönem</td>
                <td className="px-6 py-4">0.40 - 0.50</td>
                <td className="px-6 py-4">1.5 - 2.5 mm</td>
                <td className="px-6 py-4">7 - 10 günde bir</td>
                <td className="px-6 py-4 text-amber-600 font-bold">Düşük (Aşırı sudan kaçın)</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Vejetatif Gelişme</td>
                <td className="px-6 py-4">0.70 - 0.85</td>
                <td className="px-6 py-4">3.0 - 4.5 mm</td>
                <td className="px-6 py-4">5 - 7 günde bir</td>
                <td className="px-6 py-4 text-blue-600 font-bold">Orta</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Yumru Bağlama</td>
                <td className="px-6 py-4">1.00 - 1.10</td>
                <td className="px-6 py-4">5.0 - 6.5 mm</td>
                <td className="px-6 py-4">3 - 4 günde bir</td>
                <td className="px-6 py-4 text-red-600 font-bold">Çok Yüksek (Kritik)</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Yumru İrileşme</td>
                <td className="px-6 py-4">1.15</td>
                <td className="px-6 py-4">6.0 - 8.0 mm</td>
                <td className="px-6 py-4">3 - 4 günde bir</td>
                <td className="px-6 py-4 text-red-600 font-bold">Zirve (Maksimum Hassas)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Olgunlaşma</td>
                <td className="px-6 py-4">0.30 - 0.40</td>
                <td className="px-6 py-4">1.5 - 2.0 mm</td>
                <td className="px-6 py-4">Sulamayı kesin</td>
                <td className="px-6 py-4 text-stone-500 font-bold">Düşük (Kabuk bağlama için)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">6. Patates Sulamasında Altın Bilgiler ve Sık Yapılan Yanlışlar</h2>
        <p>
          Sahadaki pratik deneyimler ve ziraat mühendislerinin araştırmaları, sulama hatalarının yarattığı deforma yumruların patatesin pazar kalitesini ciddi oranda düşürdüğünü kanıtlamaktadır. Aşağıdaki altın kurallara dikkat etmek hasat başarınızı katlayacaktır:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Yumru İrileşmede Su Kesikliğine Son Verin:</strong> Patates bitkisi yumrularını büyütürken birkaç gün dahi olsa susuz kalırsa hücre büyümesi yavaşlar ve yumru kabuğu sertleşir. Bu kuraklığın ardından bol su verildiğinde, yumru içi tekrar büyümek isteyecek fakat sertleşmiş kabuk buna izin veremeyecek ve patates ortadan ikiye derinlemesine <strong>çatlayacaktır</strong>. Benzer şekilde boğumlu/bel vermiş veya çatallı patateslerin arkasındaki yegane sebep bu düzensiz sulamalardır.</li>
          <li><strong>Gündüz Sıcağında Sulamayı Yasaklayın:</strong> Güneşin tam tepede olduğu öğle saatlerinde yağmurlama yapmak suyun %35-40'ının havaya gitmesine neden olur. Ayrıca mercek etkisi yaratan su damlaları yaprakların kavrulmasına ve patates solgunluk hastalıklarının tarlada hızla sirayet etmesine neden olur.</li>
          <li><strong>Hasat Öncesi Erken Kesim Kuralı:</strong> Hasat tarihinden en az 15-20 gün önce suyu kesmek, kabuk kalitesi için yasal seviyedir. Islak topraktan sökülen patateslerin yumru kabuğu çok ince ve soyulmaya elverişli olur. Bu durum depolamada büzülmeye, nem kaybına ve nakliyede patateslerin yaralanarak mantar kapmasına yol açar.</li>
          <li><strong>Toprak Nemini Tansiyometre İle İzleyin:</strong> İmkanlar elverdiğince, tarlaya yerleştirilecek 30 ve 60 cm'lik iki farklı derinliğe sahip tansiyometrelerle (toprak nem ölçer) nem seviyesini gözleyin. Nem seviyesinin 25-30 cb (centibar) değerlerinin altına inmesine izin vermeden bir sonraki sulamayı başlatın.</li>
        </ul>

        <div className="bg-[var(--green-dark)] text-white p-10 rounded-[40px] my-10 shadow-lg border border-[var(--green-mid)]">
          <h4 className="text-2xl font-black mb-4 text-white">Yüksek Kazanç İçin Akıllı Formülasyon</h4>
          <p className="font-bold text-white/90">
            Patates, girdiği her toprakta yüksek verim potansiyeline sahip bir altın yumrudur. Onu doğru zamanda ve dengeli bir şekilde sulamak, tarladaki su faturanızı düşürürken, dekar bazında 4 tondan 6.5 tona kadar uzanan rekor verimlerin kilidini açacaktır. Bilime güvenin, tarlanızdaki her bir damla suyun değerini bilin!
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">7. Sonuç</h2>
        <p>
          Özetle; patates tarımında başarılı bir <strong>patates sulama</strong> stratejisi, bitkinin sığ köklerini sürekli canlı ve neme doygun tutmayı, ancak aynı zamanda çürümeye yol açacak aşırı sudan kaçınmayı gerektirir. Büyüme dönemleri boyunca günlük su ihtiyacı katsayılarına göre planlanmış bir damla sulama altyapısı kurmak, sürdürülebilirliğin ve karlı çiftçiliğin nihai formülüdür.
        </p>
        <p>
          Tarlanızın koordinatlarına, toprak tipine ve patatesinizin mevcut gelişim evresine özel olarak bugün kaç dakika ve metreküp sulama yapmanız gerektiğini bilimsel yöntemlerle hesaplamak ister misiniz? Hemen ana sayfamıza geçiş yaparak <strong>Tarım Sulama Hesaplayıcımızı</strong> kullanmaya başlayın, ürününüzün su bütçesini dijital olarak zahmetsizce yönetin!
        </p>
      </div>
    )
  },
  "aycicegi-sulama-rehberi-2026": {
    title: "Ayçiçeği Sulama Rehberi 2026: Çimlenmeden Hasada Bilimsel Takvim",
    date: "15 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    readTime: "17 dk okuma",
    image: "https://images.unsplash.com/photo-1595971294624-80bcf9d1eb21?auto=format&fit=crop&w=800&q=80",
    category: "Tarla Bitkileri",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium select-none">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic">
          Ayçiçeği (Helianthus annuus), Türkiye tarımında bitkisel ham yağ ihtiyacını karşılayan en stratejik ürünlerin başında gelmektedir. Derin kazık kök yapısı nedeniyle kuraklığa son derece dayanıklı bir tarla bitkisi olarak kabul edilse de, 2026 yılı iklim koşullarında dekar başına maksimum dane verimi ve yüksek yağ oranı elde etmek bilimsel yöntemlerle planlanmış bir <strong>ayçiçeği sulama</strong> programına doğrudan bağlıdır. Bu rehberde, çimlenmeden hasada kadar ayçiçeği sulama takvimi ve Türkiye iklimi şartlarında uygulanabilecek en etkili su tasarrufu tekniklerini inceledik.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">1. Ayçiçeği Tarımında Doğru Sulamanın ve Nem Seviyesinin Önemi</h2>
        <p>
          Ayçiçeği bitkisi, büyümesinin ilk evrelerinde oldukça kanaatkar davranabilir. Ancak sanılanın aksine, bitkinin vejetatif büyümesinden çiçeklenmeye, tabla oluşumundan çekirdek dolumuna kadar uzanan süreçte belirli nem seviyelerine duyduğu ihtiyaç kritiktir. Yanlış veya eksik planlanan bir <strong>ayçiçeği sulama</strong> rejimi, boş çekirdek oranını artırarak dekar verimini düşürür ve sanayicinin en çok önem verdiği çekirdekteki net yağ yüzdesini aşağıya çeker.
        </p>
        <p>
          Ülkemizde ayçiçeği çoğunlukla kuru şartlarda (yağışa bağlı) yetiştirilse de, sulanan alanlarda verimin kuru alanlara kıyasla %50 ila %150 oranında arttığı bilimsel saha araştırmalarıyla kanıtlanmıştır. Doğru zamanlama ile yapılan sulama, bitkinin boylenmesini, yaprak alan endeksini, tabla çapını ve dolayısı ile bin tane ağırlığını optimize eder. Aynı zamanda bitkinin sıcak rüzgarlara karşı fizyolojik direncini de pekiştirir.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">2. Türkiye İklimi ve Bölgesel Ayçiçeği Sulama İhtiyaçları</h2>
        <p>
          Türkiye'nin farklı tarım havzalarındaki yağış rejimleri ve sıcaklık farkları, <strong>ayçiçeği sulama</strong> takvimlerini doğrudan etkiler. Başarılı bir planlama için <strong>Türkiye iklimi</strong> altındaki bölgesel dinamikleri iyi okumak gerekir:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Trakya ve Marmara Havzası:</strong> Türkiye'deki ayçiçeği üretiminin kalbi olan Trakya'da kış ve ilkbahar yağışları çimlenme için genellikle yeterlidir. Ancak son yıllarda Temmuz ve Ağustos aylarında yaşanan aşırı sıcak dalgaları bitkiyi tam çiçeklenme ve dolum aşamasında yakalamaktadır. Bu havzada yapılacak en az 1 veya 2 canlandırıcı sulama, verimi garanti altına almanın en etkili yoludur.</li>
          <li><strong>İç Anadolu Havzası:</strong> Yıllık ortalama yağışın 300-400 mm bandında kaldığı İç Anadolu'da, ayçiçeği yetiştirmek kesinlikle düzenli sulamayı zorunlu kılar. Bu bölgede yağış açığını kapatmak için çimlenmeden hasada kadar en az 3 ila 4 sulama seansı organize edilmelidir.</li>
          <li><strong>Ege ve Akdeniz Havzaları:</strong> Birinci ürün veya buğday hasadı sonrası ikinci ürün olarak ekilebilen bu bölgelerde, aşırı buharlaşma hızı (evapotranspirasyon) ve tavan yapan yaz sıcakları nedeniyle sulama aralıkları dar tutulmalı, toprak nemi sürekli izlenmelidir.</li>
          <li><strong>Güneydoğu Anadolu (GAP) Bölgesi:</strong> GAP kanallarından gelen suyla canlanan bu bölgede, aşırı kuru hava ve kuru rüzgarlar nedeniyle transpirasyon (bitki terlemesi) çok yüksektir. Bu durum, günlük mm cinsinden su ihtiyacını diğer bölgelere göre %30 oranında artırır.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">3. Ayçiçeğinin Gelişim Evreleri ve Su Stresine Karşı Hassasiyeti</h2>
        <p>
          Ayçiçeğinin vejetasyon süresi ortalama 110-130 gün sürer. Bu süreçte bitki her an aynı miktarda su tüketmez. Planlı <strong>ayçiçeği sulama</strong> yönetimi için kritik büyüme evreleri şunlardır:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Filizlenme ve Çıkış Dönemi (I. Evre):</strong> Toprağın tavında olması çimlenme hızını belirler. Tohumun şişmesi ve toprak yüzeyine sağlıklı çıkması için hafif nem kafi gelir. Türkiye iklimi genelinde bu dönemde genellikle ilkbahar yağışları yeterlidir.</li>
          <li><strong>Erken Gelişme ve Yapraklanma Dönemi (II. Evre):</strong> Bitki 6-8 yapraklı olana kadar köklerini derinlere göndermeye çalışır. Bu evrede hafif su kısıtı uygulanması kök fizyolojisini olumlu etkiler, kökleri derin su tabakalarına erişmeye teşvik eder.</li>
          <li><strong>Yıldız Tabla (Tomurcuk) Oluşumu (III. Evre):</strong> Gövde ucunda küçük yeşil tabla taslağının belirdiği andır. Ayçiçeğinin suya açlığının başladığı ilk tehlikeli dönemeçtir. Bu evredeki susuzluk, bitki başının (tablanın) küçük kalmasına neden olur.</li>
          <li><strong>Çiçeklenme Dönemi (IV. Evre - En Kritik Aşama):</strong> Çiçeklerin sarı taç yapraklar açtığı ve dölleme dönemine girdiği evredir. Bu dönemde toprak neminin yetersiz olması döllemeyi sekteye uğratır ve tablanın ortasındaki çekirdeklerin boş (boş kof dane) kalmasına neden olur. Toplam verim kaybının %50'sini bu dönemdeki su stresi oluşturur.</li>
          <li><strong>Tane Doldurma ve Süt Olum Dönemi (V. Evre):</strong> Çekirdeğin içinin dolduğu ve yağ sentezinin tavan yaptığı evredir. Bu aşamadaki sulamalar bin tane ağırlığını yükseltir ve yağ randımanını doğrudan tırmandırır.</li>
          <li><strong>Fizyolojik Olgunlaşma ve Hasat Hazırlığı (VI. Evre):</strong> Tablalar sararır, yapraklar kurur. Hasada 2-3 hafta kala sulama tamamen durdurularak nem oranının makul seviyeye (%9-10) inmesi sağlanır.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">4. Çimlenmeden Hasada Kadar Ayçiçeği Sulama Takvimi</h2>
        <p>
          Sürdürülebilir ve verimli bir üretim için hazırladığımız, bitkinin büyüme seyri ve su tüketim katsayılarını (Kc) gösteren bilimsel sulama planlaması:
        </p>

        <div className="overflow-x-auto my-8 border-2 border-stone-100 rounded-2xl shadow-sm">
          <table className="min-w-full border-collapse bg-white">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Büyüme Dönemi</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Ekim Sonrası Tahmini Gün</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Bitki Katsayısı (Kc)</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Toprak Nemi Hedefi</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Yıllık Sulama Önceliği</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Çimlenme ve Çıkış</td>
                <td className="px-6 py-4">0 - 20 Gün</td>
                <td className="px-6 py-4">0.30 - 0.40</td>
                <td className="px-6 py-4">Tarla Kapasitesi %50-60</td>
                <td className="px-6 py-4 text-stone-400 font-bold">Düşük (Yağışlar yeterli)</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Vejetatif Gelişme</td>
                <td className="px-6 py-4">20 - 45 Gün</td>
                <td className="px-6 py-4">0.60 - 0.75</td>
                <td className="px-6 py-4">Tarla Kapasitesi %60-65</td>
                <td className="px-6 py-4 text-blue-500 font-bold">Orta (Kök derinleşmesi için)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Yıldız Tabla Oluşumu</td>
                <td className="px-6 py-4">45 - 60 Gün</td>
                <td className="px-6 py-4">0.90 - 1.05</td>
                <td className="px-6 py-4">Tarla Kapasitesi %70-75</td>
                <td className="px-6 py-4 text-amber-600 font-bold">Yüksek (1. Kritik Sulama)</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Tam Çiçeklenme</td>
                <td className="px-6 py-4">60 - 80 Gün</td>
                <td className="px-6 py-4">1.10 - 1.15</td>
                <td className="px-6 py-4">Tarla Kapasitesi %80-85</td>
                <td className="px-6 py-4 text-red-600 font-bold">Zirve (Hayati Sulama - Can Damarı)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Tane Doldurma</td>
                <td className="px-6 py-4">80 - 105 Gün</td>
                <td className="px-6 py-4">0.85 - 0.95</td>
                <td className="px-6 py-4">Tarla Kapasitesi %70-70</td>
                <td className="px-6 py-4 text-red-600 font-bold">Çok Yüksek (Yağ Oranı Artırıcı)</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Fizyolojik Olgunluk</td>
                <td className="px-6 py-4">105+ Gün</td>
                <td className="px-6 py-4">0.20 - 0.35</td>
                <td className="px-6 py-4">Doğal Kuruma %10-15</td>
                <td className="px-6 py-4 text-stone-400 font-bold">Sulamayı Kesin</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">5. Modern Ayçiçeği Sulama Yöntemleri ve Verim Analizleri</h2>
        <p>
          Tarlanızdaki suyun bitkiye ulaştırılma biçimi, hem harcayacağınız su faturasını hem de bitki patolojisini bizzat tayin eder. Ayçiçeğinde başlıca sulama alternatifleri şunlardır:
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">A) Damla Sulama (Yüksek Teknolojili ve Tasarruflu)</h3>
        <p>
          Uygulandığı tarlalarda su kayıplarını %95-98 oranında engelleyen damla sulama yöntemi, ayçiçeği tarımı için de devrimsel sonuçlar yaratmaktadır. Su doğrudan bitkinin kazık kök merkezine damladığı için yabancı otların gelişimini ekarte eder. Bitki yaprakları ıslatılmadığı için Mildiyö (Plasmopara halstedii) ve Tabla Çürüklüğü (Sclerotinia sclerotiorum) gibi nem seven mantar etmenlerinin yayılmasını bütünüyle bloke eder. Dekara gübre uygulamasını da (damlama borularından sıvı gübreleme ile) bitkiye milimetrik olarak ulaştırır.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">B) Yağmurlama Sulama (Pivot veya Mobil Borular)</h3>
        <p>
          Özellikle çıkış dönemi ve erken yapraklanma safhasında toprağa homojen nem dağıtmak yönünden verimlidir. Ancak çiçeklenme safhasında ve tabla oluşumunda yağmurlama sulama yapılması, ayçiçeği tablalarında su göllenmelerine sebep olabilir. Bu durum tablaların çürümesine veya polenlerin yıkanarak döllenme zafiyeti yaşamasına kapı açabilir. Eğer yağmurlama sistemi kullanılıyorsa, sulama mutlaka serin havalarda (gece veya gün doğumu) uygulanmalıdır.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">6. Su Tasarrufu Püf Noktaları ve Aşırı Sulamanın Zararları</h2>
        <p>
          Çiftçilerimiz arasında yaygın olan "Ne kadar çok sularsam o kadar çok mahsul alırım" inancı ayçiçeğinde çok büyük maliyet ve verim felaketlerine neden olabilir. Aşırı <strong>ayçiçeği sulama</strong> yapılması şu riskleri beraberinde getirir:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Gövde Zafiyeti ve Yatması (Lodging):</strong> Aşırı sulanan topraklarda bitki hızlıca ve zayıf lif yapısıyla boylanır. Tabla da ağırlaştığında hafif rüzgarlarda bile ayçiçeği gövdeleri ortadan kırılarak yere yatabilir ve bu mekanik hasar hasadı imkansız kılar.</li>
          <li><strong>Yağ Oranının Çökmesi:</strong> Aşırı su, ayçiçeği çekirdeğinde yağ sentezini baskılar ve protein birikimini artırır. Bu durum, sanayiciye satacağınız ürünün yağ randıman derecesini düşürerek tonaj başına kazancınızı sekteye uğratır.</li>
          <li><strong>Kök Boğulması ve Çürüme:</strong> Killi topraklarda suyun göllenmesi köklerin solunum yapmasını engeller, bitkiyi sarartır ve boğarak tamamen kurutabilir.</li>
        </ul>
        <p>
          Bu sebeple maksimum <strong>su tasarrufu</strong> sağlamak adına toprak yapısını analiz etmek, gece sulamalarına öncelik vermek ve organik madde takviyesiyle toprağın süngerimsi yapısını güçlendirerek nemi hapis altında tutmak gerekir.
        </p>

        <div className="bg-[var(--green-dark)] text-white p-10 rounded-[40px] my-10 shadow-lg border border-[var(--green-mid)]">
          <h4 className="text-2xl font-black mb-4 text-white">2026 Sezonu İçin Kritik Tavsiye</h4>
          <p className="font-bold text-white/90">
            Ayçiçeği tarımında altın kural: Tabla teşekkülü, Çiçeklenme başlangıcı ve Süt olum evresi olmak üzere, yılda en azından 3 kez kritik dönem sulamasını kaçırmamak dekar başarısını tescilleyecektir. İklim krizine karşı suyumuzu akıllıca kullanalım, tarlamızın bütçesini kontrol altında tutalım!
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">7. Sonuç</h2>
        <p>
          2026 ve gelecek tarım yıllarında, kuru tarım alışkanlıklarını bir kenara bırakıp iklim verileri ve toprak analizlerine dayalı modern <strong>ayçiçeği sulama</strong> yöntemlerini hayata geçiren üreticiler daima bir adım önde olacaktır. Doğru evrede, tam kıvamında verilecek su, geleceğimizin güvencesi olan topraklarımızı ve su havzalarımızı ayakta tutacaktır.
        </p>
        <p>
          Ektiğiniz ayçiçeği varyetesinin, tarlanızın toprak dokusunun ve bölgenizdeki güncel meteorolojik verilerin ışığında tarlanıza bugün vermeniz gereken net su miktarını dakika bazında hassas bir şekilde hesaplamak ister misiniz? Hemen ana sayfamızı ziyaret ederek <strong>Tarımsal Sulama Hesaplama Aracımızı</strong> kullanın, suyunuzu milimetrik yöneterek kazancınızı katlayın!
        </p>
      </div>
    )
  },
  "fao-penman-monteith-metodu-nedir": {
    title: "FAO Penman-Monteith Metodu Nedir? Çiftçi İçin Basit Anlatım",
    date: "18 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    readTime: "18 dk okuma",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2560&q=100",
    category: "Sulama Bilimi",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium select-none">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic">
          Tarımda "ne zaman ve ne kadar sulama yapmalıyım?" sorusunun dünyadaki en güvenilir cevabı <strong>FAO sulama metodu</strong> olarak bilinen Penman-Monteith denklemidir. Karmaşık matematiksel formüllerden oluşsa da, aslında mantığı her çiftçinin anlayabileceği kadar basittir: "Güneş, rüzgar ve nem tarlamdan ne kadar su çaldı?" Bu rehberde, bu bilimsel yöntemi teknik terimlerden arındırarak pratik örneklerle inceleyeceğiz.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">1. FAO Penman-Monteith Metodu Nedir?</h2>
        <p>
          FAO (Birleşmiş Milletler Gıda ve Tarım Örgütü), 1990'ların başında dünyanın her yerinde, her türlü iklimde doğru sonuç verecek bir standart sulama hesabı geliştirmek üzere uzmanları topladı. Sonuç olarak ortaya çıkan <strong>FAO Penman-Monteith metodu</strong>, bitkilerin gözeneklerinden dışarı attığı su (terleme) ile topraktan buharlaşan suyun toplamını yani "Evapotranspirasyonu" hesaplar.
        </p>
        <p>
          Bu metoda neden "Altın Standart" deniyor? Çünkü önceki yöntemlerin aksine bu metod; sadece sıcaklığa bakmaz. Sıcaklık yüksek olsa bile nem de yüksekse buharlaşmanın azalacağını, rüzgarın ise buharlaşmayı nasıl hızlandırdığını fiziksel olarak hesaplar. Özetle tarlanızın "su bilançosunu" çıkaran dünyanın en dürüst muhasebecisidir.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">2. Metodun Temel Mantığı: Referans Bitki (ETo)</h2>
        <p>
          Formülün temelinde "Referans Evapotranspirasyon" (ETo) dediğimiz bir değer vardır. Bilim insanları hesabı basitleştirmek için hayali bir tarla hayal ederler: Boyu her zaman 12 cm olan, her tarafı yeşil ve gür otlarla (çimle) kaplı, asla susuz kalmayan bir tarla.
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>ETo Değeri:</strong> Eğer meteoroloji istasyonu "Bugün ETo 6 mm" diyorsa, bu şu anlama gelir: "Eğer tarlanız o hayali 12 cm'lik çimle kaplı olsaydı, bugün 6 mm su kaybedecekti."</li>
          <li><strong>Hesaplamadaki Faktörler:</strong> Güneş radyasyonu (en büyük enerji kaynağı), hava sıcaklığı, havadaki nem oranı ve rüzgar hızı.</li>
        </ul>
        <p>
          Siz domates ekiyorsanız, doğrudan ETo değerini kullanamazsınız. Çünkü domatesin yaprak yapısı, boyu ve su tüketimi o hayali çimden farklıdır. İşte burada devreye Bitki Katsayısı (Kc) girer.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">3. Bitki Katsayısı (Kc) ile Kişiselleştirme</h2>
        <p>
          Her bitkinin, gelişim dönemine göre bir katsayısı vardır. <strong>FAO sulama metodu</strong> şu basit çarpma işlemini kullanır:
          <br /><br />
          <span className="block p-4 bg-stone-50 border-l-4 border-[var(--green-mid)] font-black text-lg text-center">
            Gerçek Su İhtiyacı (ETc) = Referans Buharlaşma (ETo) x Bitki Katsayısı (Kc)
          </span>
        </p>
        <p>
          <strong>Örnekleyelim:</strong>
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Başlangıç Dönemi:</strong> Mısır ektiniz, henüz iki yapraklı. Toprak büyük ölçüde boş. Kc değeri küçüktür (yaklaşık 0.30). ETo 10 mm ise, mısırınız sadece 3 mm su tüketir.</li>
          <li><strong>Gelişme Dönemi:</strong> Mısır boylandı, her yer yaprak oldu. Kc değeri yükselir (yaklaşık 1.20). ETo yine 10 mm ise, mısırınız 12 mm su tüketir. Yani o hayali çimden daha fazla suya ihtiyaç duyar.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">4. Çiftçi Bu Metodu Nasıl Kullanır?</h2>
        <p>
          Eskiden bu hesabı yapmak için yüzlerce sayfalık tablolar ve karmaşık hesap makineleri gerekirdi. Bugün ise teknoloji işi bizim yerimize yapıyor. Bir çiftçi olarak izlemeniz gereken adımlar şunlardır:
        </p>
        <ul className="list-decimal pl-8 space-y-4">
          <li><strong>Hava Verisi Alın:</strong> Tarlanıza en yakın resmi meteoroloji istasyonundan ETo değerini öğrenin. (Tarım Sulama Hesaplayıcı uygulamamız bunu sizin yerinize koordinat bazlı yapar).</li>
          <li><strong>Bitki Dönemini Belirleyin:</strong> Bitkiniz hangi aşamada? (Yeni ekim mi? Çiçeklenme mi? Hasat öncesi mi?)</li>
          <li><strong>Hesaplayın:</strong> ETo değeri ile o günkü bitki katsayınızı çarpın.</li>
          <li><strong>Sulamayı Planlayın:</strong> Çıkan sonuç (örneğin 5 mm) tarlanızın o gün 1 dekarda 5 ton su kaybettiğini söyler. Yağış varsa bu miktardan düşün, yoksa sulama ile bu açığı kapatın.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">5. Pratik Örnekler: Gerçek Hayatta FAO Metodu</h2>
        
        <div className="my-8 p-6 bg-[var(--green-light)]/30 rounded-3xl border border-[var(--green-mid)]/20 shadow-sm">
          <h4 className="text-xl font-black mb-4">Senaryo: Konya'da Gece Sulaması Yapan Bir Mısır Çiftçisi</h4>
          <p className="text-stone-700 leading-relaxed">
            <strong>Hava Durumu:</strong> Çok sıcak, rüzgarlı bir Temmuz günü. ETo değeri 11 mm açıklandı.<br />
            <strong>Bitki:</strong> Mısır, püskül çıkarma döneminde (Kc = 1.20).<br />
            <strong>Hesap:</strong> 11 mm x 1.20 = 13.2 mm.<br />
            <strong>Sonuç:</strong> Mısır o gün dekarda 13.2 ton su kaybetmiştir. Çiftçi eğer tarlasını 3 günde bir suluyorsa, 3 günlük kayıp 39.6 ton olacaktır. Bu bilimsel veri sayesinde çiftçi tarlasına eksik su verip verimi düşürmez veya fazla su verip elektrik faturasını şişirmez.
          </p>
        </div>

        <div className="my-8 p-6 bg-amber-50 rounded-3xl border border-amber-200 shadow-sm">
          <h4 className="text-xl font-black mb-4">Senaryo: Antalya'da Serada Domates</h4>
          <p className="text-stone-700 leading-relaxed">
            <strong>Hava Durumu:</strong> Nemli, kapalı bur gün. ETo değeri düşük: 2.5 mm.<br />
            <strong>Bitki:</strong> Domates, meyve büyütme döneminde (Kc = 1.15).<br />
            <strong>Hesap:</strong> 2.5 mm x 1.15 = 2.87 mm.<br />
            <strong>Sonuç:</strong> Hava serin olduğu için bitki çok az su tüketmiştir. Çiftçi bu durumda "havalar iyi gidiyor" diyerek rutin sulamasını iptal edebilir veya miktarını yarıya indirerek ciddi bir su ve enerji tasarrufu sağlar.
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">6. Neden Geleneksel Yöntemler Yerine FAO Metodu?</h2>
        <p>
          Birçok çiftçimiz tarlayı parmağıyla kontrol ederek veya bitki yapraklarının pörsümesini bekleyerek sulama zamanına karar verir. Ancak bu "belirtiler" ortaya çıktığında bitki zaten stres altına girmiş ve verim potansiyelini kaybetmeye başlamıştır. 
        </p>
        <p>
          <strong>FAO sulama metodu</strong> kullanarak yapılan sulama;
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Gizli Açlığı Önler:</strong> Bitkinin susadığını biz görmeden çok önce formül görür.</li>
          <li><strong>Gübre Yıkanmasını Durdurur:</strong> Toprağın su tutma kapasitesinden fazla su vererek pahalı gübrelerin yer altına kaçmasını engeller.</li>
          <li><strong>Hastalıkları Azaltır:</strong> Bitkiyi gereksiz nemden koruyarak mantar hastalıklarının (mantar, pas, külleme) önüne geçer.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">7. Sonuç</h2>
        <p>
          <strong>FAO sulama metodu</strong> artık sadece ziraat mühendislerinin laboratuvarlarda kullandığı bir formül değildir. 2026 yılı tarım teknolojileri sayesinde bu metod her çiftçinin cebindeki akıllı telefona kadar girmiştir. İklim krizinin kapımızda olduğu, suyun her damlasının altın değerinde olduğu bu dönemde şansa veya tahmine dayalı tarım yapılamaz.
        </p>
        <p>
          Siz de bugün tarlanızın kaç mm suya ihtiyacı olduğunu öğrenmek, <strong>su tasarrufu</strong> yaparken veriminizi %30-40 oranında artırmak istiyorsanız tarlanızın koordinatlarını sistemimize kaydedin. "Tarım Sulama Hesaplayıcı" tarlanızın Penman-Monteith hesabını her gün otomatik yapsın, size sadece vanayı açmak kalsın.
        </p>
      </div>
    )
  },
  "yagmurlama-mi-damla-sulama-mi": {
    title: "Yağmurlama mı Damla Sulama mı? Hangisi Daha İyi?",
    date: "20 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    readTime: "18 dk okuma",
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff8655200?auto=format&fit=crop&w=2560&q=100",
    category: "Sistem Karşılaştırma",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium select-none">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic">
          Modern bitkisel üretimde sürdürülebilirliğin, yüksek dekar veriminin ve kârlılığın temeli doğru su yönetimidir. Çiftçilerimizin tarlaları için yeni bir yatırım yaparken en çok ikileme düştüğü soru: "<strong>Yağmurlama damla sulama</strong> sistemlerinden hangisini seçmeliyim?" Yapay yağmur etkisi yaratan sistemler ile suyu milimetrik damlatan borular arasında fiziksel, biyolojik ve ekonomik açıdan devasa farklar mevcuttur. Bu detaylı rehberde, her iki sistemi maliyet, verimlilik, bitki türleri ve toprak yapıları çerçevesinde bilimsel olarak karşılaştırdık.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">1. Su Kaynaklarının Azaldığı Dönemde Sulama Yöntemi Seçimi</h2>
        <p>
          Küresel iklim dalgalanmaları ve azalan temiz nehir/yer altı su seviyeleri, çiftçiliği su kısıtı altında yapılan hassas bir meslek haline getirdi. Vahşi (salma) sulamanın toprağı çoraklaştırması ve suyu israf etmesi nedeniyle, modern tarımda artık kapalı veya basınçlı sulama sistemleri zorunlu hale gelmiştir. Bu aşamada karşımıza çıkan en popüler iki çözüm; yağmurlama sulama sistemleri ile damla sulama sistemleridir.
        </p>
        <p>
          Hangi yöntemin tarlanızı kalkındıracağı sorusuna tek bir "en iyi" cevabı vermek imkansızdır. Her iki sistemin de farklı arazi topografyaları, su kaliteleri, bölgesel iklim özellikleri ve yetiştirilecek <strong>bitki türleri</strong> için kendine has üstünlükleri ve sınırları bulunur. Doğru bir <strong>yağmurlama damla sulama</strong> analizi yapmak, rasyonel bir yatırım bütçesi hazırlamanın ilk adımıdır.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">2. Yağmurlama Sulama Nedir? Avantajları ve Dezavantajları</h2>
        <p>
          Yağmurlama sulama, suyun belirli bir basınç altında havaya püskürtülerek doğal yağmur damlaları şeklinde toprak yüzeyine düşürülmesi prensibine dayanır. Sistem; ana boru hatları, lateral (yan) borular, sprinkler başlıkları ve pompalardan oluşur.
        </p>
        <p>
          <strong>Yağmurlamanın Temel Avantajları:</strong>
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Meyil Uyumu:</strong> Eğimli veya dalgalı arazilerde toprak tesviyesine gerek kalmadan homojen su dağıtımı sağlayabilir.</li>
          <li><strong>Gübreleme ve İlaçlama (Fertigasyon):</strong> Suda eriyen gübrelerin sisteme verilmesiyle yaprak ve toprak gübrelemesi aynı anda yapılabilir.</li>
          <li><strong>Mikroklima Kontrolü:</strong> Sıcak yaz günlerinde havayı soğutarak bitki üzerindeki ısı stresini azaltır. Ayrıca ilkbahar geç donlarından bitkiyi korumak amacıyla dondan koruma sulaması yapılabilir.</li>
          <li><strong>Uygulama Pratikliği:</strong> Boruların tarladan tarlaya taşınması, sökülüp kurulması nispeten kolaydır.</li>
        </ul>
        <p>
          <strong>Yağmurlamanın Dezavantajları:</strong>
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Buharlaşma Kaybı:</strong> Su havaya püskürtüldüğü için rüzgarlı ve sıcak havalarda buharlaşma kaybı %30-35'lere kadar çıkabilir.</li>
          <li><strong>Hastalık Riski:</strong> Bitki yapraklarının sürekli ıslak kalması, Mildiyö, Antraknoz ve Külleme gibi mantari (fungal) yaprak hastalıklarının yayılmasını hızlandırır.</li>
          <li><strong>Toprak Sıkışması ve Erozyon:</strong> Damla boyutu büyük olduğunda ağır killi topraklarda kaymak tabakası oluşturur ve toprağın havalanmasını zorlaştırır.</li>
          <li><strong>Rüzgar Hassasiyeti:</strong> Saatte 15-20 km hızı aşan rüzgarlarda suyun dağılım homojenliği ciddi oranda bozulur, tarlanın bazı yerleri susuz kalırken bazı yerlerinde su göllenir.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">3. Damla Sulama Nedir? Avantajları ve Dezavantajları</h2>
        <p>
          Damla sulama ise, suyun düşük bir basınçla, polietilen borular üzerindeki özel damlatıcılar (drippers) vasıtasıyla doğrudan bitki kök bölgesine damlalar halinde verilmesidir. Tüm tarlayı ıslatmak yerine sadece bitkinin aktif kök hacmini nemlendirir.
        </p>
        <p>
          <strong>Damla Sulamanın Temel Avantajları:</strong>
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Maksimum Su Verimliliği:</strong> Doğrudan köke su iletildiği için buharlaşma kaybı neredeyse sıfırdır. Su kullanım etkinliği %95-98 civarındadır.</li>
          <li><strong>Enerji Tasarrufu:</strong> Yağmurlama sistemleri 3-4 bar gibi yüksek basınç isterken, damla sulama 1-1.5 bar gibi çok düşük basınçlarla çalışır. Bu durum elektrik faturasını doğrudan yarı yarıya düşürür.</li>
          <li><strong>Yabancı Ot Kontrolü:</strong> Sadece bitki sırası sulandığı için sıra aralarındaki yabancı ot tohumları su bulamaz ve büyüyemez. Bu sayede ot ilacı ve el işçiliği masrafı azalır.</li>
          <li><strong>Hastalıkların Engellenmesi:</strong> Yapraklar her zaman kuru kaldığı için mantari hastalıkların oluşumu engellenir, daha temiz ve sağlıklı mahsuller elde edilir.</li>
          <li><strong>Toprak Havalanması:</strong> Toprak yapısı bozulmaz, çamurlaşma olmaz. Toprağın su-hava dengesi daima dengede kaldığı için bitki kökleri maksimum seviyede çalışır.</li>
        </ul>
        <p>
          <strong>Damla Sulamanın Dezavantajları:</strong>
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Yüksek İlk Kurulum Maliyeti:</strong> Filtre sistemleri, gübre tankları, vanalar ve tarlanın tamamını kaplayan damlama boruları nedeniyle ilk yatırım maliyeti fazladır.</li>
          <li><strong>Tıkanma Tehlikesi:</strong> Sudaki kireç, mil, yosun veya organik maddeler damlatıcı deliklerini tıkayabilir. Bu sebeple çok iyi bir filtrasyon sistemi kurulmalı ve periyodik olarak asit uygulaması yapılmalıdır.</li>
          <li><strong>Sınırlı Ömür:</strong> Tarlaya her yıl serilen ve toplanan ince duvarlı damlatıcı boruların fiziksel ömrü ve yıpranma hızı yüksektir (ortalama 2-5 yıl).</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">4. Detaylı Karşılaştırma Tablosu</h2>
        <p>
          İki sistemi daha iyi analiz edebilmeniz adına, ziraat mühendisliği standartlarına göre hazırlanmış karşılaştırma tablomuz şöyledir:
        </p>

        <div className="overflow-x-auto my-8 border-2 border-stone-100 rounded-2xl shadow-sm">
          <table className="min-w-full border-collapse bg-white">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Değerlendirme Kriteri</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Yağmurlama Sulama Sistemi</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Damla Sulama Sistemi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Su Kaybı ve Buharlaşma</td>
                <td className="px-6 py-4 text-red-600 font-bold">Yüksek (%25 - %35)</td>
                <td className="px-6 py-4 text-green-700 font-bold">Çok Düşük (%2 - %5)</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Su Tasarrufu ve Verimlilik</td>
                <td className="px-6 py-4">Orta seviye (%70 - %75)</td>
                <td className="px-6 py-4 text-green-700 font-bold">Maksimum seviye (%95 - %98)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">İlk Kurulum (Yatırım) Maliyeti</td>
                <td className="px-6 py-4 text-green-700 font-bold">Düşük - Orta arası</td>
                <td className="px-6 py-4 text-red-600 font-bold">Yüksek (Filtre + Boru maliyeti)</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Gerekli Pompa Basıncı</td>
                <td className="px-6 py-4">Yüksek (3.0 - 4.5 Bar)</td>
                <td className="px-6 py-4 text-green-700 font-bold">Düşük (1.0 - 1.5 Bar)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Elektrik / Enerji Tüketimi</td>
                <td className="px-6 py-4 text-red-600 font-bold">Yüksek (Yüksek basınç ihtiyacı)</td>
                <td className="px-6 py-4 text-green-700 font-bold">Düşük (Tasarruflu pompa çalışması)</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Yabancı Ot ve İlaç İhtiyacı</td>
                <td className="px-6 py-4">Yüksek (Tarlanın her yeri ıslanır)</td>
                <td className="px-6 py-4 text-green-700 font-bold">Çok Düşük (Sadece sıra üzeri ıslanır)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Rüzgardan Etkilenme Oranı</td>
                <td className="px-6 py-4 text-red-600 font-bold">Çok Yüksek (Homojenlik bozulur)</td>
                <td className="px-6 py-4 text-green-700 font-bold">Etkilenmez (Sıfır rüzgar kaybı)</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Tıkanma Hassasiyeti</td>
                <td className="px-6 py-4 text-green-700 font-bold">Çok Düşük</td>
                <td className="px-6 py-4 text-red-600 font-bold">Yüksek (Periyodik bakım şart)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">5. Maliyet Analizi ve Geri Dönüşüm (Amortisman) Süresi</h2>
        <p>
          Her iki sistemi kurarken cebimizden çıkacak yatırım bütçesi ve bu bütçenin tarlada kendini ne kadar sürede amorti edeceği en önemli finansal parametredir.
        </p>
        <p>
          <strong>Yağmurlama Sulama Maliyeti:</strong> Temel olarak ana hat boruları, sprinkler başlıkları, bağlantı aparatları ve bir pompadan ibarettir. Tarlanın her yerine boru sermeniz gerekmediği için nispeten ekonomiktir. Ancak sistem çalışırken ihtiyaç duyulan yüksek su basıncı, pompanızın daha büyük beygir gücüne sahip olmasını ve faturaya yansıyan elektrik giderlerinizin ayda %30-40 daha fazla olmasına sebebiyet verir.
        </p>
        <p>
          <strong>Damla Sulama Maliyeti:</strong> İlk kurulumda; kaliteli bir disk/kum filtresi sistemi, hidrosiklon, gübre enjeksiyon ünitesi, debi ayarlı vanalar ve tarladaki her sıraya serilecek damlatıcılı borular nedeniyle ciddi bir bütçe talep eder. Ancak damla sulamanın sunduğu büyük avantajlar bu farkı hızla kapatır:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Gübre Kazancı (%30 - %40):</strong> Gübre doğrudan köke verildiği için yer altına sızmaz ve havaya kaçmaz. Sıvı gübre sarfiyatınız azalır.</li>
          <li><strong>Su ve Elektrik Faturası Kazancı (%40 - %50):</strong> Daha düşük basınç ve hacimle sulama yapıldığı için traktör yakıtı veya kuyu pompası elektrik faturaları hızla erir.</li>
          <li><strong>Verim Kazancı (%25 - %40):</strong> Bitki fizyolojisi hiç strese girmeden sürekli optimum nem seviyesinde beslendiği için dekar verimi katlanır.</li>
        </ul>
        <p>
          <strong>Özetle Finansal Analiz:</strong> Damla sulama sistemi, yağmurlama sistemine kıyasla ilk kurulumda yaklaşık 1.5 - 2 kat daha pahalıya kurulsa dahi; su, elektrik, gübre, işçilik ve ürün verim artışı hesaplandığında İç Anadolu ve Ege gibi kurak havzalarda ortalama <strong>1.5 ila 2 tarım sezonunda</strong> kendini tamamen amorti eder ve kâra geçmenizi sağlar.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">6. Verimlilik Karşılaştırması</h2>
        <p>
          Tarımda <strong>verimlilik</strong> parametresi, kullanılan her bir metreküp su başına elde edilen kuru madde/ürün tonajı olarak ölçülür. Bu bilimsel disipline "Su Kullanım Randımanı" (WUE - Water Use Efficiency) adı verilir.
        </p>
        <p>
          Sanal veya gerçek <strong>yağmurlama damla sulama</strong> sistemleri su kullanım randımanı açısından sınandığında şu sonuçlar öne çıkar:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li>Sıcak yaz günlerinde gün ortasında yapılan yağmurlamalarda, su damlacıklarının %25'i yapraklara dahi değmeden buharlaşır (Transpirasyon dışı kayıp).</li>
          <li>Yağmurlama suyu toprağa aniden ve yoğun yükseklikte düştüğü için eğimli arazilerde yüzey akışına (erezyona) yol açarak en verimli üst toprağı nehir yataklarına kaydırabilir.</li>
          <li>Oysa ki damla sulama boruları, suyu toprağın yapısına uygun bir sızdırma hızıyla (örneğin saatlik 1.6 - 2.0 litre) iletir. Toprak suya tamamen doyar ve yer çekimiyle bitki kök derinliğinin (örneğin patateste 40 cm, mısırda 60 cm) altına sızarak israf olmaz.</li>
        </ul>

        <div className="bg-[var(--green-light)] p-8 rounded-[32px] my-10 border-2 border-[var(--green-mid)]/20 shadow-sm">
          <h4 className="text-xl font-black mb-4">Uzman Ziraat Mühendisi Tavsiyesi</h4>
          <p className="font-bold text-[var(--green-dark)] leading-relaxed">
            Eğer kısıtlı bir su kaynağınız veya kuyu debiniz varsa, yağmurlama yerine kesinlikle damla sulamayı tercih etmelisiniz. Yağmurlama ile ancak 10 dönüm sulayabileceğiniz mevcut su kaynağınız ile damla sulama altyapısına geçerek hiçbir ek masraf yapmadan aynı sürede 18-20 dönüm araziyi mükemmel bir şekilde yetiştirebilirsiniz.
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">7. Bitki Türleri Hangi Yöntemi Seviyor?</h2>
        <p>
          Doğru sulama metodunu seçerken, tarlanıza ekeceğiniz veya kurulu olan bahçenizdeki <strong>bitki türleri</strong> en büyük belirleyicidir. Bazı bitki grupları yapraklarının ıslanmasından nefret ederken, bazıları ise yaprak nemiyle can bulur:
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">A) Damla Sulamanın Şart Olduğu Bitki Türleri (Hassas Ürünler)</h3>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Yumrulu Tarla Bitkileri:</strong> Patates, soğan ve sarımsak. Yağmurlama ile sürekli yaprak ıslatılması mildiyö hastalığını tetikler ve yumrularda fungal çürüklük yaratır. Patateste düzensiz nem de çatlamaya yol açar.</li>
          <li><strong>Meyve Bahçeleri:</strong> Zeytin, narenciye, elma, şeftali, bağcılık (üzüm) ve badem. Ağaçların gövde ve yapraklarının ıslanması kök boğazı çürüklüğüne (Phytophthora) ve gövde kanserlerine zemin hazırlar. Sadece kök bölgesi damlatılmalıdır.</li>
          <li><strong>Sıra Arası Geniş Endüstri Bitkileri ve Sebzeler:</strong> Domates, biber, patlıcan, kavun ve karpuz kesinlikle damlama ile sulanmalıdır. Meyvelerin suyla teması kaliteyi saniyeler içinde sıfıra indirir.</li>
        </ul>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">B) Yağmurlama Sulamaya Uygun Olan Bitki Türleri</h3>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Yem ve Çayır Bitkileri:</strong> Yonca, korunga, sılajlık mısır (ilk evreleri) ve çim alanları. Bu bitkilerin homojen bir şekilde tüm tarlaya yayılan yaprak yapısı nedeniyle yağmurlama sistemi oldukça idealdir.</li>
          <li><strong>Sık Ekilen Tahıllar:</strong> Buğday, arpa, yulaf gibi sıra arası çok dar olan bitkilerde damla sulama borusu sermek pratik değildir ve işçilik maliyetini uçurur. Bu bitkiler için Center Pivot veya doğrusal hareketli büyük yağmurlama sistemleri harika sonuç üretir.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">8. Sonuç ve Karar Rehberi: Hangisini Seçmeliyim?</h2>
        <p>
          Toparlamak gerekirse, <strong>yağmurlama damla sulama</strong> sistemleri arasından seçim yaparken şu kontrol listesi size ışık tutacaktır:
        </p>
        <ol className="list-decimal pl-8 space-y-3">
          <li><strong>Suyunuz Kireçli ve Çamurlu mu?</strong> Eğer suyunuz çok kirli, kireç oranı yüksek ve gelişmiş bir filtre bakımı yapacak vaktiniz yoksa yağmurlama sistemi daha zahmetsiz çalışacaktır.</li>
          <li><strong>Rüzgarlı Bir Bölgede misiniz?</strong> Eğer tarlanız İç Anadolu'nun veya Güneydoğu'nun rüzgarlı rüzgâr koridorlarında yer alıyorsa, yağmurlama başlıklarından çıkan su rüzgarla uçup gidecektir. Bu durumda damla sulama yegane kurtarıcınızdır.</li>
          <li><strong>Yatırım Bütçeniz Nedir?</strong> İlk başta cebinizden çıkacak bütçe kısıtlıysa yağmurlama ucuz bir başlangıçtır. Ancak uzun vadede elektrik ve su faturasından batsın istemiyorsanız kredi veya hibe olanaklarını araştırıp damla sulamaya geçiş yapmalısınız.</li>
        </ol>

        <div className="bg-[var(--green-dark)] text-white p-10 rounded-[40px] my-10 shadow-lg border border-[var(--green-mid)]">
          <h4 className="text-2xl font-black mb-4 text-white">Yapay Zeka Destekli Akıllı Hesaplama</h4>
          <p className="font-bold text-white/90">
            Hangi sistemi seçerseniz seçin, tarlanıza her gün ne kadar su vermeniz gerektiğini bilimsel olarak öğrenmek zorundasınız. Hemen ana sayfamıza giderek tarlanızın koordinatlarını kaydedin. Tarımsal Sulama Hesaplayıcımız seçtiğiniz sulama yönteminin verim çarpanını ve bitkinizin o günkü su kaybını otomatik hesaplasın, su israfına bir son verin!
          </p>
        </div>
      </div>
    )
  },
  "pamuk-sulama-takvimi-ve-su-ihtiyaci": {
    title: "Pamuk Sulama Takvimi ve Su İhtiyacı: Çukurova ve Ege İçin Bilimsel Rehber",
    date: "23 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    readTime: "19 dk okuma",
    image: "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&w=2560&q=100",
    category: "Endüstri Bitkileri",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium select-none">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic">
          \"Beyaz altın\" olarak adlandırılan pamuk (Gossypium hirsutum), tekstil ve yağ sanayinin vazgeçilmez hammaddesidir. Yüksek ekonomik değere sahip bu bitkiden en yüksek lif kalitesini ve dekar verimini almak, doğru tasarlanmış bir <strong>pamuk sulama</strong> programına bağlıdır. Ege ve Akdeniz gibi kavurucu yaz sıcaklarının yaşandığı bölgelerde, bilinçsiz veya eksik sulamalar koza dökümüne ve lif boyunun kısalmasına yol açar. Bu rehberimizde, pamuğun gelişim evreleri, bölge iklimlerine göre su tüketimi ve modern damla sulama stratejilerini tüm detaylarıyla inceledik.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">1. Pamuk Tarımında Suyun Hayati Rolü ve Fizyolojik Önemi</h2>
        <p>
          Pamuk bitkisi, kazık kök yapısı yardımıyla toprağın derinliklerindeki neme ulaşma yeteneğine sahip olsa da, aslında yüksek miktarda terleme (transpirasyon) yapan ve yeşil aksamı geniş bir bitkidir. Bir pamuk bitkisinin ömrü boyunca tükettiği su miktarı iklim şartlarına bağlı olarak 600 mm ila 950 mm arasında değişir. Bu büyük su bütçesinin doğru yönetilmesi, pamuk liflerinin taranabilirliğini, mukavemetini ve en önemlisi \"çırçır randımanını\" bizzat belirler.
        </p>
        <p>
          Toprakta yaşanan su eksikliği (su stresi), bitkinin büyüme hormonlarını baskılayarak büyüme noktalarını köreltir. Bunun sonucunda bitki boyu kısa kalır, tarak adı verilen çiçek tomurcukları solarak dökülür ve açan koza sayısı radikal biçimde azalır. Öte yandan, gereğinden fazla ve kontrolsüz yapılan sulamalar da pamukta \"vejetatif büyümeyi\" (boya kaçma) teşvik eder; bitki tüm enerjisini dala ve yaprağa vererek koza tutmayı unutur. Bu nedenle dengeli <strong>pamuk sulama</strong> yönetimi, altın oran kuralına dayanmalıdır.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">2. Pamuğun Kritik Büyüme Dönemleri ve Su Hassasiyeti</h2>
        <p>
          Pamuk bitkisi gelişim süreci boyunca su tüketim hızı bakımından homojen bir rota izlemez. Çiftçilerimizin sulama vanalarını açarken bitkinin içinde bulunduğu <strong>büyüme dönemleri</strong> ve fizyolojisini çok iyi analiz etmesi gerekir:
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">A) Çimlenme ve Erken Fide Dönemi (Ekimden 25-30 Gün Sonrasına Kadar)</h3>
        <p>
          Tohumun toprakla buluşup çimlenebilmesi için toprak sıcaklığının en az 15-16 °C olması ve yeterli tav neminin bulunması şarttır. Bu evrede bitkinin su tüketimi çok düşüktür. Eğer kış/ilkbahar yağışları yetersizse hafif bir can suyu veya ekim öncesi tava sulaması (salaklama) yapılabilir. Çıkış sonrasında ise bitkinin ilk 3-4 hafta boyunca fazla sulanmaması istenir. Erken sulama toprağı soğutarak kök çürüklüğü (\"çökerten\" hastalığı) riskini artırdığı gibi, fideyi tembelliğe alıştırır. Hafif su kısıtı uygulandığında fide, nemi bulmak amacıyla kökünü toprağın 1-1.5 metre derinliklerine kadar uzatır; bu da güçlü bir çapa ve dayanıklı gövde mimarisi demektir.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">B) Tarak Oluşum Dönemi (Yaklaşık 30 - 60. Günler)</h3>
        <p>
          İlk tarakların (çiçek tomurcuklarının) belirmesiyle pamukta hızlı büyüme dönemi başlar. Yaprak alanı genişledikçe bitkinin günlük su tüketim hızı yükselişe geçer. Taraklanma aşamasında bitkiye su stresi yaşatılması, tarak dökülmesine sebep olacağından bu dönem kritik bir kırılmadır. Toprağın faydalı su kapasitesinin %50'nin altına düşmesine müsaade edilmemelidir. Ege ve Akdeniz'de bu dönemin sonuna doğru ilk ana sulama (can sulaması) planlanır.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">C) Çiçeklenme ve Koza Gelişimi (60 - 100. Günler - En Hassas Dönem)</h3>
        <p>
          Pamuğun can damarı bu evredir. Sarı ve kırmızı çiçeklerin tarlayı kapladığı, ardından koza taslaklarının büyümeye başladığı 40 günlük bu periyot, pamuğun toplam su ihtiyacının %60-70'ini tükettiği zirve aşamadır. Temmuz ve Ağustos aylarına denk gelen bu dönemde transpirasyon zirve yapar. Bu evrede yaşanacak tek bir günlük susuzluk bile bitkinin savunma mekanizması olarak koza döşemesini (koza silmesini) tetikler. Bu dönemde toprak nemi sürekli yüksek tutulmalı, damla sulama sistemi kuruluysa haftalık su uygulamaları aksatılmamalıdır.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">D) Koza Açma ve Olgunlaşma Dönemi (100. Gün ve Sonrası)</h3>
        <p>
          Kozaların çatlayarak beyaz pamuk elyaflarının dışarı çıktığı safhadır. Bu dönemde su tüketimi yavaş yavaş azalır. Aşırı sulama bu safhada koza açmasını geciktirir, liflerin kalitesini bozar, lekelenmelere (sarı leke) sebep olur ve hasat makinelerinin tarlaya girmesini zorlaştırır. Hasattan yaklaşık 3 ila 4 hafta önce sulama tamamen kesilerek yaprakların kuruması ve kozaların doğal olarak açılması sağlanmalıdır.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">3. Türkiye'deki Pamuk Havzaları: Ege Bölgesi ve Akdeniz Bölgesi Karşılaştırması</h2>
        <p>
          Türkiye'de pamuk tarımı denince akla ilk gelen iki büyük dev havza; <strong>Ege Bölgesi</strong> ve <strong>Akdeniz Bölgesi</strong> (özellikle Çukurova, Amik Ovası ve Hatay yöresi) ekolojileridir. İklim koşulları ve toprak özellikleri sulama sıklığını doğrudan belirler:
        </p>
        <p>
          <strong>Akdeniz Bölgesi (Çukurova ve Çevresi):</strong> Akdeniz ikliminin etkisiyle Çukurova'da yaz ayları sadece sıcak değil, aynı zamanda aşırı derecede nemlidir. Yüksek nispi nem, bitkideki transpirasyon hızını bazen dengelese de, geceleri düşmeyen sıcaklıklar bitkinin solunum hızını artırır ve gece de enerji tüketmesine neden olur. Çukurova toprakları genellikle killi ve ağır bünyelidir; su tutma kapasiteleri çok yüksektir. Bu topraklarda kuyu veya kanal sulamalarında göllenme problemleri yaşanmaması için sulama miktarı hassas planlanmalıdır. Ayrıca yüksek nem, havza genelinde Verticillium solgunluğu ve kırmızı örümcek gibi hastalık/zararlı baskısını artırdığından, bitki üstünü ıslatmayan sulama yöntemleri seçilmelidir.
        </p>
        <p>
          <strong>Ege Bölgesi (Büyük Menderes ve Gediz Havzaları):</strong> Aydın, İzmir ve Manisa gibi merkezleri kapsayan Ege Havzası'nda yaz sıcakları karasal rüzgarlarla birleşerek kuru bir sıcak hava dalgası yaratır. Akdeniz'e kıyasla nem oranının daha düşük olması, buharlaşma hızını (ETo) inanılmaz derecede yukarı taşır. Ege ovalarında topraklar genellikle tınlı, kumlu-tınlı ve geçirgendir. Bu durum, suyun topraktan hızla süzülmesine yol açar. Bu fizyolojik gerçeklik nedeniyle Ege Bölgesi'nde pamuk sulama aralıkları Akdeniz'e oranla biraz daha dar tutulmalı, hafif ama sık sulamalar tercih edilerek bitkinin solgunluk noktasına girmesi engellenmelidir. Lif elastikiyeti ve mukavemeti açısından Ege pamuğunun ünü, bu hassas nem dengesinin kurulmasıyla doğrudan ilişkilidir.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">4. Neden Pamukta Damla Sulama? Geleceğin Çözümü</h2>
        <p>
          Geleneksel salma (vahşi) sulama yöntemleri miktar bazında çok su tüketmesine rağmen, pamukta ciddi kayıplara neden olur. Pamuk gövdesi ve kök boğazı aşırı suya karşı çok hassastır. Toprağın çamurlaşması köklerin havasız kalarak sararmasına (fizyolojik döküm) yol açar. İşte bu noktada <strong>damla sulama</strong> pamuk yetiştiricileri için bir can simidi haline gelmiştir.
        </p>
        <p>
          <strong>Damla Sulamanın Pamuk Tarımındaki Somut Faydaları:</strong>
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Mükemmel Lif Kalitesi:</strong> Kök bölgesindeki nem miktarı gün boyunca stabil kaldığından bitki hiçbir zaman turgor basıncı krizine girmez. Bu sayede pamuk elyafı (lif) kesintisiz uzar, mikroner değeri ve lif mukavemeti birinci sınıf seviyeye ulaşır.</li>
          <li><strong>%40-50 Su Tasarrufu:</strong> Özellikle su kısıtının yaşandığı Ege ve Çukurova havzalarında, kısıtlı kaynaktan maksimum verim alınmasını sağlar. Buharlaşma sıfıra yakındır.</li>
          <li><strong>Yatık Büyümenin Engellenmesi:</strong> Damla sulama köke milimetrik su sunduğu için sıra aralarını kuru bırakır. Aşırı azot ve su birleşimiyle tetiklenen kontrolsüz boylanma engellenir, yatma riski bertaraf edilir.</li>
          <li><strong>Gübrelemede (Fertigasyon) Tam İsabet:</strong> Pamuğun azot, fosfor ve potasyum ihtiyacı, damlama boruları içerisinden şerbet halinde doğrudan emici tüylere gönderilir. Gübre kaybı %10'un altına iner.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">5. Pamuk İçin Bilimsel Sulama Takvimi (Referans Tablo)</h2>
        <p>
          Aşağıdaki tablo, normal iklim koşullarında ekimden hasada kadar pamuk bitkisinin su tüketim katsayıları (Kc) ve sulama stratejilerini göstermektedir:
        </p>

        <div className="overflow-x-auto my-8 border-2 border-stone-100 rounded-2xl shadow-sm">
          <table className="min-w-full border-collapse bg-white">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Bitki Büyüme Evresi</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Tahmini Gün Sayısı</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Bitki Katsayısı (Kc)</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Damla Sulama Sıklığı</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Sulama Stratejisi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Çimlenme ve Çıkış</td>
                <td className="px-6 py-4">0 - 25 Gün</td>
                <td className="px-6 py-4">0.15 - 0.25</td>
                <td className="px-6 py-4">Gerekirse 1 kez</td>
                <td className="px-6 py-4 text-stone-500">Tohum yatağı nemlendirilir, fazla sudan kaçınılır.</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Tarak Başlangıcı</td>
                <td className="px-6 py-4">25 - 55 Gün</td>
                <td className="px-6 py-4">0.35 - 0.75</td>
                <td className="px-6 py-4">8 - 10 günde bir</td>
                <td className="px-6 py-4 text-blue-600 font-bold">İlk sulama (can suyu). Kökleşmeyi teşvik için hafif su kısıtı.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Çiçeklenme & Koza</td>
                <td className="px-6 py-4">55 - 95 Gün</td>
                <td className="px-6 py-4">0.95 - 1.20</td>
                <td className="px-6 py-4">4 - 6 günde bir (Yoğun)</td>
                <td className="px-6 py-4 text-red-600 font-bold">En kritik evre! Kesinlikle susuz bırakılmamalıdır.</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Koza Açılma Dönemi</td>
                <td className="px-6 py-4">95 - 120 Gün</td>
                <td className="px-6 py-4">0.70 - 0.40</td>
                <td className="px-6 py-4">12 - 15 günde bir</td>
                <td className="px-6 py-4 text-amber-600 font-bold">Sulama miktarı azaltılır. Lif olgunlaşması desteklenir.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Hasat Öncesi</td>
                <td className="px-6 py-4">120+ Gün</td>
                <td className="px-6 py-4">0.20 - 0.15</td>
                <td className="px-6 py-4">Sulamayı Kesin</td>
                <td className="px-6 py-4 text-stone-400 font-bold">Hasattan 25-30 gün önce su sıfırlanır, yapraklar dökülür.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">6. Pamuk Sularken Sık Yapılan Hatalar ve Altın Kurallar</h2>
        <p>
          Saha tecrübelerimiz, birçok pamuk üreticisinin bazı alışkanlıklar nedeniyle tonaj kaybettiğini göstermektedir. İşte tarlanızda dikkat etmeniz gereken hayati noktalar:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Gece Sulamasına Öncelik Verin:</strong> Gündüz sıcağında yapılan sulamalarda buharlaşma kaybı tavan yapar. Su damlacıkları mercek görevi görerek pamuk yapraklarında yanıklara yol açabilir. Sulamayı akşam serinliğinde başlatıp sabaha karşı bitirmek su tasarrufunu %20 artırır.</li>
          <li><strong>İlk Sulamayı Çok Erken Yapmayın:</strong> \"Pamuk tarlası ilk sulamayı isteyene kadar bağırmalıdır\" sözü bir ziraat doğrusudur. Bitkinin yaprak rengi koyu mavi-yeşile dönmeden ve öğlen sıcağında hafifçe pörsüme belirtisi görmeden ilk suyu vermeyin. Erken sulanan pamuk tembel büyür.</li>
          <li><strong>Hasat Öncesi Suyu Zamanında Kesin:</strong> Çırçır fabrikalarının en sevmediği pamuk, ıslak hasat edilmiş pamuktur. Hasattan 3-4 hafta önce kesilmeyen su kozaların çürümesine ve elyaflarda mukavemet kaybına sebebiyet verir.</li>
        </ul>

        <div className="bg-[var(--green-dark)] text-white p-10 rounded-[40px] my-10 shadow-lg border border-[var(--green-mid)]">
          <h4 className="text-2xl font-black mb-4 text-white">Pamuk Üreticileri İçin 2026 Teknolojisi</h4>
          <p className="font-bold text-white/90">
            Ege veya Akdeniz'de olmanız fark etmeksizin, değişen hava sıcaklıkları karşısında tarlanızın o gün kaç litre suya ihtiyaç duyduğunu ezbere bilemezsiniz. Hemen ana sayfamıza gidin, tarlanızın konumunu haritadan seçin ve pamuk çeşidinizi belirtin. Akıllı Sulama Hesaplayıcımız, bölgenizdeki meteorolojik istasyon verileri ile FAO standartlarını harmanlayarak tarlanız için günlük milimetrik su ihtiyacını çıkarsın!
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">7. Sonuç</h2>
        <p>
          Pamuk tarımında sürdürülebilirlik ve kârlılık, suyu ne kadar çok verdiğinizle değil, ne kadar akıllıca yönettiğinizle ölçülür. Bilimsel bir <strong>pamuk sulama</strong> takvimi uygulamak ve modern damla sulama altyapısı yatırımlarına yönelmek, çiftçimizi yüksek maliyetlerden koruyacaktır. Bu topraklar hepimizin; her bir damla suyu koruyarak beyaz altınımızın bereketini nesiller boyu sürdürelim!
        </p>
      </div>
    )
  },
  "sulama-sistemleri-turler-avantajlar-ve-dezavantajlar": {
    title: "Sulama Sistemleri: Türler, Avantajlar ve Dezavantajlar",
    date: "24 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    readTime: "20 dk okuma",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=2560&q=100",
    category: "Sistem Karşılaştırma",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium select-none">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic">
          Tarımda başarının sirri akıllı kaynak yönetimidir. Su, toprağın can damarıdır ancak onu bitkiye nasıl ulaştırdığınız, hasat döneminde elde edeceğiniz tonajı, ürün kalitesini ve tarlanızın kârlılığını baştan aşağıya belirler. Günümüzde kullanılan farklı <strong>sulama sistemleri</strong>, tarla yapısına, su bütçesine ve yetiştirilecek bitki türlerine göre farklılık göstermektedir. Bu kapsamlı rehberimizde; damla, yağmurlama, karık ve salma sulama yöntemlerini tüm bilimsel detaylarıyla karşılaştırıp, hangi sistemin tarlanız için doğru tercih olduğunu masaya yatırdık.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">1. Tarımda Su Yönetiminin ve Doğru Sulama Sistemi Seçiminin Önemi</h2>
        <p>
          Küresel iklim krizi, su kaynaklarının daralması ve artan girdi maliyetleri nedeniyle tarımsal üretim artık hata payı kabul etmeyen hassas bir sektöre dönüşmüştür. Tarlanıza herhangi bir ekim yapmadan önce vermeniz gereken en kritik karar, kullanacağınız <strong>sulama sistemleri</strong> altyapısıdır. Yanlış tasarlanmış bir altyapı, fahiş elektrik faturalarına, pahalı gübrelerin yıkanıp yer altına kaçarak israf olmasına, toprak yapısının bozularak çoraklaşmasına ve mahsulün dökülmesine yol açar.
        </p>
        <p>
          Doğru sulama sistemi seçerken arazinin eğimi (topografya), toprağın su tutma hızı (geçirgenliği), kuyu veya kanaldan gelen suyun debisi ve tuzluluk oranı, bölgedeki rüzgar koridorları ve elbette ki yetiştirilecek bitkinin fizyolojik yapısı analiz edilmelidir. Tarla yatırımlarınızın başarıya ulaşabilmesi için geleneksel ve modern yöntemleri bir arada değerlendirmeniz şarttır.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">2. Geleneksel Sulama Sistemleri ve Riskleri</h2>
        <p>
          Yüzyıllardır kullanılan yüzey sulama yöntemleri, herhangi bir mekanik pompalama veya basınç altyapısı gerektirmediği için ilk etapta masrafsız görünür. Ancak su tasarrufu ve toprak sağlığı açısından bu yöntemlerin gizli maliyetleri çok ağırdır.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">A) Salma Sulama (Vahşi Sulama)</h3>
        <p>
          Salma sulama, suyun tarlanın bir ucundan serbestçe salınarak toprak yüzeyini bütünüyle kaplaması prensibine dayanır. Genelde suyun bol olduğu ova tabanlarında tercih edilen en ilkel yöntemdir.
        </p>
        <p><strong>Avantajları:</strong></p>
        <ul className="list-disc pl-8 space-y-2">
          <li>İlk kurulum maliyeti sıfıra yakındır; boru, vana, filtre veya akıllı teknoloji yatırımı gerektirmez.</li>
          <li>Kullanımı son derece basittir, yüksek teknik bilgi veya uzmanlık aramaz.</li>
        </ul>
        <p><strong>Dezavantajları:</strong></p>
        <ul className="list-disc pl-8 space-y-2">
          <li><strong>Devasa Su İsrafı:</strong> Suyun %50 ila %60'tan fazlası bitkiye ulaşmadan buharlaşarak veya yer altına aşırı sızarak kaybolur. Su kullanım verimliliği en fazla %35-40 seviyesindedir.</li>
          <li><strong>Çoraklaşma ve Tuzlanma:</strong> Taban suyunun yükselmesine yol açar. Sıcak havalarda buharlaşan su, toprağın derinindeki tuzları yüzeye çekerek verimli tarım topraklarını zamanla beyaz ve verimsiz bir tuz tabakasına dönüştürür.</li>
          <li><strong>Erozyon ve Besin Kaybı:</strong> Hızlı akan su tarlanın en verimli üst katmanını (humusu) sürükleyip götürür. Ayrıca tarlaya attığınız pahalı gübreler kök bölgesinden süzülerek derinlere kaçar ve bitkiye fayda sağlamaz.</li>
        </ul>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">B) Karık Sulama Yöntemi</h3>
        <p>
          Sıra halinde ekilen (mısır, pamuk, ayçiçeği, bazı sebzeler) bitkiler için uygulanan, sırtlar arasına açılmış küçük kanallardan (karıklardan) suyun kontrollü olarak akıtılması yöntemidir.
        </p>
        <p><strong>Avantajları:</strong></p>
        <ul className="list-disc pl-8 space-y-2">
          <li>Salma sulamaya kıyasla su kaybı daha düşüktür; su doğrudan bitkilerin ekili olduğu sırtların alt tabanını ıslatır.</li>
          <li>Bitkilerin kök boğazı çamur içinde kalmadığı için bazı fungal kök hastalıklarının oluşma riski azalır.</li>
        </ul>
        <p><strong>Dezavantajları:</strong></p>
        <ul className="list-disc pl-8 space-y-2">
          <li>Arazi eğiminin çok hassas ayarlanması gerekir; aksi takdirde su karıkların baş kısmında birikirken uç kısımlarına ulaşamaz.</li>
          <li>Yine de su kaybı fazladır (verimlilik %50-60 seviyesinde kalır). Büyük miktarlarda el işçiliği ve tarlada sürekli gözetim gerektirir.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">3. Modern Basınçlı Sulama Sistemleri ve Üstünlükleri</h2>
        <p>
          Gelişen teknolojiyle birlikte suyun kontrollü, milimetrik ve basınçlı boru ağları yardımıyla dağıtılması, tarımda devrimsel verim artışlarını beraberinde getirmiştir.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">A) Yağmurlama Sulama Sistemleri</h3>
        <p>
          Su, belirli bir tazyikle havaya püskürtülerek doğal yapay yağmur damlacıkları şeklinde tarlaya ulaştırılır. Sprinkler adı verilen döner başlıklar veya devasa Center Pivot sistemleri yardımıyla kurulur.
        </p>
        <p><strong>Avantajları:</strong></p>
        <ul className="list-disc pl-8 space-y-2">
          <li><strong>Arazi Topografyasına Uyum:</strong> Eğimli, tepelik veya engebeli arazilerde mükemmel çalışır. Toprak düzleme (tesviye) maliyetini ortadan kaldırır.</li>
          <li><strong>Dondan Koruma ve Serinletme:</strong> İlkbahar son donlarında yapraklar üzerinde buz tabakası oluşturarak bitki tomurcuklarını dondan korur. Sıcak yaz günlerinde ise havayı serinleterek sıcaklık stresini hafifletir.</li>
          <li><strong>Hafif Topraklar İçin İdeal:</strong> Su tutma kapasitesi düşük, süzek (kumlu) topraklarda yüzey akışı oluşturmadan toprağı tava getirir.</li>
        </ul>
        <p><strong>Dezavantajları:</strong></p>
        <ul className="list-disc pl-8 space-y-2">
          <li><strong>Rüzgardan Aşırı Etkilenme:</strong> Rüzgarlı günlerde suyun dağılım homojenliği bozulur. Su rüzgarla uçuşarak farklı bölgelerde aşırı göllenme veya kuruluk yaratabilir.</li>
          <li><strong>Mantar ve Hastalık Riski:</strong> Bitki yaprakları sürekli nemli kaldığı için külleme, pas ve mildiyö gibi patojenlerin yayılmasını hızlandırır.</li>
          <li><strong>Yüksek İşletme Basıncı (Enerji Maliyeti):</strong> Sistem 3 ila 5 bar arasında yüksek basınç gerektirdiğinden, yüksek beygir gücünde pompalar çalıştırılmakta ve elektrik tüketimi tavan yapmaktadır.</li>
        </ul>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">B) Damla Sulama Sistemleri (En Verimli Çözüm)</h3>
        <p>
          Polietilen borular üzerine yerleştirilmiş milimetrik delikli damlatıcılar (drippers) yardımıyla düşük basınçlı suyun, doğrudan bitkinin aktif kök gelişim bölgesine damlaması yöntemidir.
        </p>
        <p><strong>Avantajları:</strong></p>
        <ul className="list-disc pl-8 space-y-2">
          <li><strong>%98'e Varan Su Tasarrufu:</strong> Su kaybı ve rüzgarla buharlaşma sıfıra yakındır. Verimliliği %95-98 arasında tescillenmiş dünyanın en etkili sulama metodudur.</li>
          <li><strong>Düşük Enerji Tüketimi (1-1.5 Bar):</strong> Çok düşük işletme basınçları ile çalıştığı için pompa elektrik faturalarını %50'ye varan oranlarda azaltır.</li>
          <li><strong>Fertigasyon (Hassas Gübreleme) Kolaylığı:</strong> Sıvı gübreler doğrudan sulama suyuna karıştırılarak milimetrik olarak bitki köklerine iletilir. Gübre tasarrufu %40 civarındadır.</li>
          <li><strong>Temiz Sıra Araları:</strong> Sadece bitki sırası sulandığı için koridorlar kuru kalır, yabancı ot tohumları büyüyemez. Ot ilacı masrafını keser.</li>
        </ul>
        <p><strong>Dezavantajları:</strong></p>
        <ul className="list-disc pl-8 space-y-2">
          <li><strong>Yüksek İlk Kurulum Maliyeti:</strong> Filtre istasyonu (hidrosiklon, kum filtreleri, disk filtreler), vanalar, basınç regülatörleri ve tarlayı bir ağ gibi ören damlama boruları başlangıçta yüksek bütçe gerektirir.</li>
          <li><strong>Tıkanma Hassasiyeti:</strong> Suda çözünen kireç, yosun parçaları veya kum taneleri delikleri tıkayabilir. Bu sebeple periyodik asit (nitrik/fosforik asit) yıkaması ve filtre bakımı zorunludur.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">4. Sulama Sistemleri Karşılaştırma Tablosu</h2>
        <p>
          Hangi sistemin sizin tarlanıza uyduğunu daha kolay anlamanız için ziraat standartlarına göre hazırladığımız özet karşılaştırma tablosu:
        </p>

        <div className="overflow-x-auto my-8 border-2 border-stone-100 rounded-2xl shadow-sm">
          <table className="min-w-full border-collapse bg-white">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Özellik / Kriter</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Salma Sulama</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Karık Sulama</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Yağmurlama</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Damla Sulama</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Su Kullanım Verimliliği</td>
                <td className="px-6 py-4 text-red-600 font-bold">%30 - %40</td>
                <td className="px-6 py-4 text-amber-600">%50 - %65</td>
                <td className="px-6 py-4 text-blue-600">%70 - %80</td>
                <td className="px-6 py-4 text-green-700 font-bold">%95 - %98</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">İlk Kurulum Yatırım Maliyeti</td>
                <td className="px-6 py-4 text-green-700 font-bold">Yok / Çok Düşük</td>
                <td className="px-6 py-4 text-green-600">Düşük</td>
                <td className="px-6 py-4 text-amber-600">Orta</td>
                <td className="px-6 py-4 text-red-600 font-bold">Yüksek</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">İşletme Enerji (Elektrik) Maliyeti</td>
                <td className="px-6 py-4 text-green-700 font-bold">Yok / Sıfır</td>
                <td className="px-6 py-4 text-green-600">Çok Düşük</td>
                <td className="px-6 py-4 text-red-600 font-bold">Çok Yüksek (3-5 Bar)</td>
                <td className="px-6 py-4 text-green-700">Düşük (1-1.5 Bar)</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">İşçilik Gereksinimi</td>
                <td className="px-6 py-4 text-red-600">Çok Yüksek</td>
                <td className="px-6 py-4 text-red-600">Yüksek</td>
                <td className="px-6 py-4 text-amber-600">Orta</td>
                <td className="px-6 py-4 text-green-700 font-bold">Düşük (Otomatize)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Mantari Hastalık Riski</td>
                <td className="px-6 py-4 text-amber-600">Yüksek</td>
                <td className="px-6 py-4">Orta</td>
                <td className="px-6 py-4 text-red-600 font-bold">Çok Yüksek</td>
                <td className="px-6 py-4 text-green-700 font-bold">Çok Düşük</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Toprak Tuzlanma / Çoraklaşma</td>
                <td className="px-6 py-4 text-red-600 font-bold">Çok Yüksek</td>
                <td className="px-6 py-4 text-red-500">Yüksek</td>
                <td className="px-6 py-4">Orta</td>
                <td className="px-6 py-4 text-green-700 font-bold">Yok / Minimum</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">5. Maliyet-Fayda Analizi ve Geri Ödeme Süresi</h2>
        <p>
          Çiftçilerimizin modern <strong>sulama sistemleri</strong> konusunda yatırım yaparken en çok çekindiği nokta, damla sulama altyapısının yüksek ilk fatura maliyetidir. Ancak bu duruma sadece anlık bir harcama olarak değil, uzun vadeli bir işletme yatırımı olarak bakmak gerekir.
        </p>
        <p>
          Damla sulama sistemlerine yapılan yatırım; su kullanımını yarı yarıya düşürdüğü için kuyu pompasının enerji tüketimini de doğrudan yarı yarıya düşürür. Ayrıca fertigasyon sistemi sayesinde tarlada kullanılacak toplam kimyasal gübre miktarı yaklaşık %30-40 oranında azalır. Gübre köke milimetrik sızdırıldığı için boşa gitmez. Yabancı ot gelişimi engellendiğinden çapa ve yabancı ot ilacı masrafları büyük ölçüde ortadan kalkar.
        </p>
        <p>
          En önemlisi de verim artışıdır. Su kısıtına girmeyen, düzenli nem ile beslenen bitkilerden elde edilen dekar verimi %30 ila %50 oranında artar. Tüm bu parametreler yan yana getirilerek hesaplandığında, damla sulama altyapısı kendisini ortalama 1.5 ila 2 tarım sezonunda tamamen amorti eder ve sonraki yıllarda çiftçinin net kazanç oranını katlayarak artırmaya devam eder.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">6. Bitki Türleri Hangi Sistemleri Tercih Ediyor?</h2>
        <p>
          Her bitki türünün yaprak, gövde ve kök fizyolojisi farklıdır. Bu nedenle tarlanıza ekmeyi planladığınız mahsule göre sistem seçimi yapmalısınız:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Meyve Bahçeleri ve Bağlar:</strong> Zeytin, badem, ceviz, narenciye, elma, armut, kiraz ve üzüm bağlarında kesinlikle damla sulama altyapısı kullanılmalıdır. Ağaçların gövdesine püskürtülen yağmurlama suları, kök boğazı çürüklüklerine ve yaprak mantarları dalgalanmalarına yol açar.</li>
          <li><strong>Sebzeler ve Yumrulu Bitkiler:</strong> Domates, biber, patlıcan, hıyar, patates, kavun, karpuz ve soğan gibi narin bitkiler için damla sulama tek seçenektir. Çilek yetiştiriciliğinde de damla sulama kaliteyi doğrudan ikiye katlar.</li>
          <li><strong>Tarla Endüstri Bitkileri:</strong> Mısır, şeker pancarı, pamuk ve ayçiçeği gibi sıra arası geniş bitkilerde damla sulama mükemmel verim sağlar. Ancak ilk tesis maliyetini azaltmak isteyen ve arazisi düz olan çiftçiler yağmurlama sulamayı da ikinci ürün mısırda veya pancarda başarıyla kullanabilir.</li>
          <li><strong>Sık Ekilen Tahıllar ve Yem Bitkileri:</strong> Buğday, arpa, yulaf, yonca ve korunga gibi tüm tarlaya sıklıkla yayılan ve sıra arası olmayan yem bitkilerinde yağmurlama sulama sistemleri en rasyonel ve verimli çözmüdür.</li>
        </ul>

        <div className="bg-[var(--green-light)] p-8 rounded-[32px] my-10 border-2 border-[var(--green-mid)]/20 shadow-sm">
          <h4 className="text-xl font-black mb-4 text-[var(--green-dark)]">Profesyonel Ziraat Mühendisi Görüşü</h4>
          <p className="font-bold text-stone-700 leading-relaxed">
            Hangi sulama sistemini seçerseniz seçin, tarlanızdaki nemin miktarını her zaman metre küp bazında izlemek zorundasınız. Bitkilerin her gelişim evresindeki su ihtiyacı farklılık gösterir. Gelişigüzel vanayı açıp sulama yapmak yerine, iklim verilerine göre planlama yapmak kazancınızı korumanın tek yoludur.
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">7. Sonuç Belgesi ve Gelecek Projeksiyonu</h2>
        <p>
          2026 yılı ve sonrasında tarımsal üretimin devamlılığı, suyumuzu ne kadar koruyabildiğimizle doğrudan orantılıdır. Geleneksel salma sulama alışkanlıklarından bir an önce kurtulup, modern basınçlı <strong>sulama sistemleri</strong> yatırımlarını hayata ulaştırmak tüm çiftçilerimizin ortak görevidir. Sürdürülebilir bir gelecek ve yüksek kazançlı hasatlar için topraklarımızı bilimle sulayalım.
        </p>
        <p>
          Tarlanızın toprak yapısı, yetiştirdiğiniz bitki türü ve seçtiğiniz sulama altyapısına göre bugün vermeniz gereken hassas su miktarını saniyeler içinde hesaplamak ister misiniz? Hemen ana sayfamıza dönerek <strong>Tarımsal Sulama Hesaplama Aracımızı</strong> tamamen ücretsiz kullanın, suyunuzu milimetrik yöneterek tasarruf etmeye başlayın!
        </p>
      </div>
    )
  },
  "biber-sulama-rehberi-gunlik-su-ihtiyaci-ve-sulama-sikligi": {
    title: "Biber Sulama Rehberi — Günlük Su İhtiyacı ve Sulama Sıklığı",
    date: "27 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    readTime: "24 dk okuma",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=2560&q=100",
    category: "Sebze Yetiştiriciliği",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium select-none">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic">
          Sebze yetiştiriciliğinde üreticilerimizi ve hobi bahçıvanlarını en çok zorlayan, bitki fizyolojisine en hassas tepkiyi veren mahsullerden biri şüphesiz biberdir. Lezzetli, diri ve pazar değeri yüksek ürünler elde etmenin sırrı ise profesyonelce kurgulanmış bir <strong>biber sulama</strong> programından geçer. Biber bitkisi yüzeysel kök yapısı ve yüksek su hassasiyeti nedeniyle ne susuzluğa ne de aşırı suya tahammül edebilir. Peki biber ne sıklıkla sulanır? Günlük su tüketimi gelişim aşamalarına göre nasıl değişir? Bu derinlemesine rehberde, biber yetiştiriciliğinde fide döneminden hasada kadar tüm adımları, su gereksinimlerini ve pratik sulama tüyolarını inceleyeceğiz.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">1. Biber Bitkisinin Suya Karşı Fizyolojik Tepkisi ve Kök Yapısı</h2>
        <p>
          Biber (Capsicum annuum), her ne kadar sıcağı çok seven bir yaz sebzesi olsa da, domates veya kavun gibi bitkilerle karşılaştırıldığında oldukça zayıf ve yüzeysel bir kök sistemine sahiptir. Köklerinin %70-80'i toprağın ilk 20-30 santimetrelik üst tabakasında yer alır. Bu kök mimarisi nedeniyle biber bitkisi derin toprak katmanlarındaki yedek nemden faydalanamaz. Toprak yüzeyinin kuruması, bitkinin saniyeler içinde su stresine girmesine yol açar.
        </p>
        <p>
          Toprak nemsiz kaldığında biber yaprakları pörsür, hücre turgor basıncı düşer ve fotosentez hızı yavaşlar. Ancak tam tersi durumda, toprağın aşırı çamurlaşması ve suyun göllenmesi de biber için ölümcüldür. Kökler oksijensiz kaldığı an biber solgunluk (kök boğazı çürüklüğü olan Phytophthora) hastalığına yakalanır ve aniden kurur. Bu nedenle başarılı bir <strong>biber sulama</strong> programı kurmanın temel kuralı, toprağı daima "tava" tınında, yani nemli ama havadar tutmaktır.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">2. Gelişim Dönemlerine Göre Biber Sulama Stratejisi</h2>
        <p>
          Biber bitkisinin ömrü boyunca su tüketim grafiği düz bir çizgide gitmez. Ekim veya dikimden başlayarak hasat sonuna kadar takip edilmesi gereken üç hayati <strong>büyüme dönemi</strong> bulunur:
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">A) Fide Dönemi ve Can Suyu Uygulaması</h3>
        <p>
          Biber yetiştiriciliği genellikle viyollerde yetiştirilen fidelerin tarlaya veya seraya şaşırtılması (dikilmesi) ile başlar. Dikim esnasında fidenin kök toprağı ile tarla toprağının bütünleşmesi için mutlaka bolca can suyu verilmelidir. Can suyunu takiben, fidelerin kök bağlayıp toprağa tutunmasını izleyen ilk 10-15 gün boyunca çok mecbur kalmadıkça sulama yapılması önerilmez.
        </p>
        <p>
          <strong>Neden Erken Sulamadan Kaçınmalıyız?</strong> Bu erken dönemde toprağın hırpalanıp sürekli sulanması fideyi tembelliğe alıştırır. Kökler su aramak için aşağıya doğru uzanmak yerine yüzeyde kalır. Suyu kısıp toprağı hafifçe çatlattığımızda ise fide, hayatta kalma içgüdüsüyle kazık köklerini derinlere salar. Güçlü bir kök sistemi, yazın kavurucu sıcaklarında bitkiyi susuzluk stresinden koruyan en büyük güvenceniz olacaktır.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">B) Çiçeklenme Dönemi ve Hassas Denge</h3>
        <p>
          Fideler boy atıp ilk çiçek tomurcuklarını açmaya başladığında, sulama sıklığı ve miktarı en kritik karara ulaşır. Bu dönem biberin şakaya gelmeyen dönemidir.
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Aşırı Sulamanın Zararı:</strong> Çiçeklenme döneminde gereğinden fazla su verilmesi, bitkinin vejetatif (yani dala, yaprağa) büyümesini aşırı kamçılar. Bitki çiçeklerini beslemeyi bırakarak dökülmesini tetikler.</li>
          <li><strong>Yetersiz Sulamanın Zararı:</strong> Çiçeklenme aşamasında toprağın susuz kalması bitkiye stres yükler. Biber kendini korumak için ilk olarak çiçeklerini kurutarak döker; çünkü çiçek yetiştirmek yüksek enerji ve su harcar.</li>
        </ul>
        <p>
          <strong>Altın Kural:</strong> Çiçeklenme evresinde süzme tırnak büyüklüğünde nem sürekli korunmalı, hafif ama sık sulamalarla topraktaki nem dalgalanmaları önlenmelidir.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">C) Meyve Bağlama ve Olgunlaşma Dönemi (Maksimum Su Tüketimi)</h3>
        <p>
          Dökülen çiçek yapraklarının altından yeşil küçük biber taslakları görünmeye başladığı an, biberin su bütçesi zirveye ulaşır. Meyvelerin hücresel bölünme ile büyüdüğü bu periyot boyunca toprakta tek bir gün dahi kuruluk yaşanmamalıdır.
        </p>
        <p>
          Meyveler irileşip hasat olgunluğuna erişene kadar geçen dönemde düzenli ve yeterli miktarda su verilmelidir. Bu evre biberin su kaybının (evapotranspirasyonunun) en yüksek olduğu sıcak temmuz ve ağustos aylarına denk gelir. Yetersiz sulama, biber meyvelerinin şeklinin bozulmasına, büzüşmesine, duvar kalınlığının azalmasına ve en önemlisi çiçek burnu çürüklüğü (meyve ucunun kararıp çürümesi) hastalığına yol açar.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">3. Biber Türlerine Göre Sulama ve Acılık Dengesi</h2>
        <p>
          Ekeceğiniz biber çeşidi sulama önceliğinizi ve hasat kalitenizi doğrudan etkiler. Piyasada en konjonktürel olan <strong>bitki türleri</strong> üzerinden sulama etkilerine göz atalım:
        </p>
        <ul className="list-disc pl-8 space-y-4">
          <li><strong>Kapya (Salçalık) Biber:</strong> Kalın etli yapısı nedeniyle oldukça yüksek su ve gübre tüketir. Meyve büyüme aşamasında yaşayacağı susuzluk, kabuğun kalınlaşıp selülozlaşmasına ve salça kalitesinin düşmesine yol açar.</li>
          <li><strong>Sivri ve Çarliston Biber:</strong> Sık sulama ile taze, gevrek ve düzgün şekilli olurlar. Sulama düzensizlikleri meyvenin kıvrılmasına (bastonlaşma) neden olarak pazar değerini kaybettirir.</li>
          <li><strong>Acı (Şili/Süs) Biberler:</strong> Biberlerdeki acılık "Kapsaisin" adı verilen bir maddeden kaynaklanır. Eğer biberin daha acı olmasını istiyorsanız, meyve bağlama evresinden sonra bitkiye kontrollü bir şekilde su stresi uygulayabilirsiniz. Az sulanan biber, savunma mekanizması olarak kapsaisin üretimini artırır ve aşırı acılaşır. Tatlı biberlerde ise tam tersine, hiç susuz bırakılmadan düzenli sulama yapılarak acılaşmalarının önüne geçilir.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">4. Biber Sulama Takvimi — Günlük ve Haftalık Su İhtiyacı</h2>
        <p>
          Biber bitkisinin ideal gelişim evrelerine ve ortalama sıcaklıklara göre hazırlanmış, sulama sıklığı referans tablomuz şöyledir:
        </p>

        <div className="overflow-x-auto my-8 border-2 border-stone-100 rounded-2xl shadow-sm">
          <table className="min-w-full border-collapse bg-white">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Gelişim Dönemi</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Tahmini Gün Aralığı</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Ortalama Günlük Su Tüketimi (m²/Litre)</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">İdeal Sulama Sıklığı (Yaz Sıcağında)</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Açıklama & Strateji</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Fide Kurulumu & Uyum</td>
                <td className="px-6 py-4">1 - 15 Gün</td>
                <td className="px-6 py-4">1.5 - 2.5 Litre</td>
                <td className="px-6 py-4">3 - 4 günde bir</td>
                <td className="px-6 py-4">Kökleşmeyi teşvik etmek için can suyu harici su kısıtlanmalıdır.</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Aktif Yeşil Aksam Büyüme</td>
                <td className="px-6 py-4">15 - 45 Gün</td>
                <td className="px-6 py-4">3.0 - 4.5 Litre</td>
                <td className="px-6 py-4">2 - 3 günde bir</td>
                <td className="px-6 py-4">Dengeli büyüme sağlanır. Boya kaçmayı engellemek için gözlem yapılır.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Çiçeklenme Başlangıcı</td>
                <td className="px-6 py-4">45 - 65 Gün</td>
                <td className="px-6 py-4">4.0 - 5.5 Litre</td>
                <td className="px-6 py-4">2 günde bir</td>
                <td className="px-6 py-4 text-amber-600 font-bold">Çiçek dökümünü önlemek için toprak nem dalgalanmalarına dikkat edilir.</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Meyve İrileşme & Olgunluk</td>
                <td className="px-6 py-4">65 - 100 Gün</td>
                <td className="px-6 py-4 text-green-700 font-bold">6.0 - 8.5 Litre</td>
                <td className="px-6 py-4 text-green-700 font-bold">Her gün veya Gün aşırı</td>
                <td className="px-6 py-4 text-blue-600 font-bold">Zirve su ihtiyacı! Çiçek burnu çürümelerine izin verilmez.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Hasat Periyodu Araları</td>
                <td className="px-6 py-4">100+ Gün</td>
                <td className="px-6 py-4">4.5 - 6.0 Litre</td>
                <td className="px-6 py-4">2 - 3 günde bir</td>
                <td className="px-6 py-4">Her elle toplamadan sonra yeni sürgünleri uyarmak için su verilir.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">5. Sulama Yöntemlerinin Karşılaştırılması: Biberde Hangisi İyi?</h2>
        <p>
          Biber sulamasında kullanılacak yöntemin seçimi, hem işletme maliyetini belirler hem de hastalık risklerini doğrudan yönetir.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">A) Damla Sulama Sistemi (Zorunlu Tercih)</h3>
        <p>
          Biber tarımında dünyada kabul görmüş tek rasyonel sulama yöntemi damla sulamadır:
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li><strong>Maksimum Verimlilik:</strong> Suyu doğrudan kök boğazına ilettiği için buharlaşma sıfırdır.</li>
          <li><strong>Gübreleme Entegrasyonu:</strong> Biberin aşırı derecede sevdiği Potasyum ve Kalsiyum elementleri, damla sulama boruları yardımıyla doğrudan köklere zerk edilebilir.</li>
          <li><strong>Mantar Hastalığı Kontrolü:</strong> Yapraklar kesinlikle ıslanmaz, sera nemi dengede kalır ve ilaçlama masrafı minimize edilir.</li>
          <li><strong>Düşük Maliyet ve Enerji Tasarrufu:</strong> Düşük pompa basıncı elektrik faturasını kayda değer miktarda düşürür.</li>
        </ul>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">B) Yağmurlama ve Salma Sulama Yöntemleri (Kaçınılması Gerekenler)</h3>
        <p>
          Biber bitkisini yağmurlama sprinkler başlıkları ile sulamak, yaprakları sürekli sırılsıklam bırakacağı için külleme ve yaprak lekesi hastalıklarını tarlada adeta patlatır. Bitkinin çiçek tozlarını ıslatarak dökllenmeyi ve meyve tutumunu engeller. Salma (vahşi) sulama ise köklerin aniden çamur içinde kalarak boğulmasına bir davettir ve solgunluk (kök boğazı çürüklüğü) nedeniyle kurumasına yol açar. Bu nedenle her iki geleneksel yöntem de biber tarımı için büyük riskler barındırır.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">6. Biber Yetiştiricileri İçin Pratik Tavsiyeler & Altın Kurallar</h2>
        <p>
          Tarlanızda veya bahçenizde biber sularken uygulayabileceğiniz en hayati pratik ve bilimsel tavsiyeler şunlardır:
        </p>
        <ol className="list-decimal pl-8 space-y-4">
          <li><strong>Erken Sabah Saatlerini Seçin:</strong> Sulamayı kesinlikle gündüzün yakıcı sıcağında yapmayın. En ideal saatler sabah 05:00 - 08:30 arasıdır. Toprağın serin olduğu bu vakitlerde su kayıpsız emilir. Akşam sulamaları da yapılabilir ancak gece boyu kalan aşırı sera içi nem mantar gelişimini hızlandırabilir.</li>
          <li><strong>Kalsiyum Dengesine Dikkat Edin:</strong> Biberlerde sıkça görülen ve meyve altlarının siyahlaşıp kurumasına seb op olan "çiçek burnu çürüklüğü" kalsiyum eksikliğinden olur. İlginç olan, kalsiyum toprakta olsa dahi bitki onu ancak suyla taşıyabilir. Düzensiz sulama yapıldığında kalsiyum meyveye ulaşamaz ve biberler çürür. Sulamayı aksatmayın!</li>
          <li><strong>Toprağınızı Elle Kontrol Edin:</strong> Dijital sensörleriniz yoksa, toprağın 10 cm derinliğine parmağınızı sokun. Avucunuza aldığınız toprak sıktığınızda dağılmadan köfte kıvamında kalıyorsa nem oranı iyidir. Çamur gibi akıyorsa fazla sulamışsınızdır, toz gibi dağılıyorsa biberleriniz acilen su bekliyor demektir.</li>
          <li><strong>Çapalamayı İhmal Etmeyin:</strong> Sulama sonrasında kaymak tabakasının kırılması ve köklerin hava alması için hafif yüzeysel çapa uygulamaları yapın. "Bir çapa, iki sulamaya bedeldir" atasözü özellikle kökü nazik biber bitkisi için tam bir altın kuraldır.</li>
        </ol>

        <div className="bg-[var(--green-dark)] text-white p-10 rounded-[40px] my-10 shadow-lg border border-[var(--green-mid)]">
          <h4 className="text-2xl font-black mb-4 text-white">Yapay Zeka Destekli Biber Sulama Programı</h4>
          <p className="font-bold text-white/90">
            Farklı bölgelerin rüzgarı, nemi ve sıcaklığı karşısında biberlerinize ne kadar su vermeniz gerektiğinden emin olamıyor musunuz? Hemen ana sayfamızdaki Akıllı Tarımsal Sulama Hesaplayıcimizi kullanın! Tarlanızın konum koordinatlarını işaretleyin, biber türünüzü seçin ve sistemimiz tarlanız için FAO standartlarında Penman-Monteith hesabını saniyeler içinde tamamen ücretsiz çıkarsın!
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">7. Sonuç</h2>
        <p>
          Biber yetiştiriciliği yüksek kazanç vaat eden ancak yoğun özen gerektiren teknik bir tarım dalıdır. Bilimsel referanslara dayalı, gelişim evrelerine uygun bir <strong>biber sulama</strong> programı yürüterek bitkilerinizi hastalıklardan koruyabilir, pazar değerini iki katına çıkarabilir ve su kaynaklarımızı sürdürülebilir kılabilirsiniz. Unutmayın, bereketli topraklar ancak doğru sulama yöntemleriyle geleceğe aktarılabilir!
        </p>
      </div>
    )
  },
  "turkiyede-sulama-destekleri-2026": {
    title: "Türkiye'de Sulama Destekleri 2026 — Devlet Yardımları Rehberi",
    date: "28 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    readTime: "25 dk okuma",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=2560&q=100",
    category: "Devlet Destekleri",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium select-none">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic font-sans">
          Türkiye&apos;de tarımda modernizasyonun lokomotifi devlet teşvikleridir. Küresel ısınmanın yarattığı kuraklık tehlikesine karşı su kaynaklarımızı akıllıca korumak amacıyla, 2026 yılında kamu hibe ve destek mekanizmaları zirveye ulaşmıştır. Bu profesyonel kılavuzda, Tarım ve Orman Bakanlığı&apos;nın bireysel hibelerinden <strong>TKDK destekleri</strong> (IPARD III) kapsamındaki dev bütçelere kadar tüm <strong>sulama destekleri 2026</strong> imkanlarını, <strong>başvuru şartları</strong> ve projelendirme süreçlerini ayrıntılarıyla mercek altına aldık.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">1. Küresel Su Krizi Karşısında Devletin 2026 Sulama Vizyonu</h2>
        <p>
          Doğru ve verimli sulama yöntemlerinin yaygınlaştırılması artık sadece çiftçinin kârlılığı için değil, Türkiye&apos;nin milli gıda güvenliği için de stratejik bir zorunluluktur. Geleneksel vahşi sulama yöntemlerinin topraklarımızı çoraklaştırdığı ve su bütçemizi tükettiği gerçeğinden hareketle, devlet politikası kuru tarımdan sulu tarıma geçişte modern basınçlı altyapılara tam destek kararı almıştır.
        </p>
        <p>
          2026 yılında hayata geçirilen hibe paketleri, özellikle fosil yakıtlardan (mazot) kurtulup güneş enerjisi (GES) destekli modern damlama ve yağmurlama teknolojilerine geçiş yapmak isteyen üretici örgütlerine, şirketlere ve şahıs işletmelerine devasa bütçeler sunmaktadır. <strong>Sulama destekleri 2026</strong> projeleri, ziraat mühendislerinin kontrollü raporlarıyla hazırlanmakta ve milli bütçeler ile Avrupa Birliği ortak fonları üzerinden finanse edilmektedir.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">2. Tarım ve Orman Bakanlığı Bireysel Basınçlı Sulama Destekleri (%50 Hibe)</h2>
        <p>
          Kırsal Kalkınma Yatırımlarının Desteklenmesi Programı (KKYDP) kapsamında her yıl yürürlüğe giren Bireysel Sulama Sistemi Altyapı Hibeleri, hırdavatçıdan çiftçiye kadar her segmente doğrudan dokunmaktadır. Bu destek modeli kapsamında, kabul edilen projelerin KDV hariç mal alım tutarının <strong>yüzde 50&apos;si (yarısı)</strong> devlet tarafından karşılıksız hibe olarak üreticiye ödenmektedir.
        </p>
        <p>
          <strong>Hibe Limitleri ve Kapsam:</strong> 2026 yılı için bireysel başvurularda üst limitler revize edilmiş durumdadır. Proje büyüklüğünün üst tavanı tekil üreticiler için 1.000.000 TL ila 3.000.000 TL arasında değişen bölgesel katsayılara göre belirlenmektedir. Bu hibe türü, özellikle kendi tarlasında butik veya endüstriyel boyutta sebze, meyve veya hububat yetiştiren çiftçiler için bürokrasi yükü en hafif olan ve en hızlı sonuçlanan devlet desteğidir.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">3. TKDK Destekleri (IPARD III Programı) ve Bölgesel Yatırım Teşvikleri</h2>
        <p>
          Tarım ve Kırsal Kalkınmayı Destekleme Kurumu (TKDK), Avrupa Birliği fonları (IPARD III) aracılığıyla Türkiye tarım tarihindeki en büyük finansal kaldıraçlardan birini yönetmektedir. TKDK sulama yatırımlarında hibe oranları projenin lokasyonuna, başvuru sahibinin yaşına ve tüzel kişilik durumuna göre <strong>%50 ila %75 arasında</strong> değişmektedir.
        </p>
        <p>
          <strong>Neden TKDK Tercih Edilmeli?</strong> 
        </p>
        <p>
          Tarım ve Orman Bakanlığı&apos;nın bireysel desteklerine göre çok daha yüksek bütçeli projelere (10 Milyon TL ve üzerine kadar) onay veren TKDK, aynı zamanda projede kullanılacak tüm makine, boru, otomasyon, filtre ve güneş paneli alımlarında <strong>KDV Muafiyeti</strong> sağlamaktadır. Bu durum yatırımcının ilk günden %20 ekstra kâr etmesi anlamına gelir. Genç çiftçiler (40 yaş altı) ve kadın girişimciler başvuru puanlamasında öncelik hakkına ve ek hibe yüzdelerine sahiptir.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">4. Sulama Teşvikleri Kapsamında Hangi Sistemler Destekleniyor?</h2>
        <p>
          Devlet yardımlarından faydalanabilmek için projelendireceğiniz yatırımın, su tasarrufu sağlayan tescilli teknolojiler içermesi şarttır. Vahşi veya salma sulama gibi geleneksel projelere tek bir kuruş dahi hibe verilmemektedir. 2026 yılında resmi olarak <strong>hangi sistemler destekleniyor</strong> listesini aşağıda sıraladık:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Tarla İçi Damla Sulama Sistemleri:</strong> Polietilen borular, damlatıcılar, kireç önleyici asit üniteleri ve kontrol panelleri.</li>
          <li><strong>Tarla İçi Yağmurlama Sulama Sistemleri:</strong> Sprinkler nozzles, yan hat boruları, bağlantı aparatları ve debi kontrol valfleri.</li>
          <li><strong>Tarla İçi Mikro-Yağmurlama (Mini-Sprink) Sistemleri:</strong> Özellikle sera altı yetiştiriciliği, fide alanları ve bodur meyve bahçeleri için tasarlanan hassas sisleme/sulama sistemleri.</li>
          <li><strong>Lineer ve Center Pivot Sulama Sistemleri:</strong> Binlerce dönümlük büyük ölçekli mısır, buğday veya patates tarlalarında kendi kendine hareket edebilen devasa dairesel/çizgisel robotik sulama hatları.</li>
          <li><strong>Yeraltı Damla Sulama Altyapıları:</strong> Suyun ve gübrenin doğrudan toprak altından, buharlaşma riski sıfıra indirilerek köke verilmesini sağlayan, ömrü 15 yılı bulan ultra modern gömülü sistemler.</li>
          <li><strong>Güneş Enerjili (Solar / GES) Sulama Sistemleri:</strong> Elektrik şebekesinden bağımsız, güneş enerjili pompalar, inverterler ve panel montaj sehpaları. 2026 teşvik mevzuatında bu kaleme ekstradan +10 öncelik puanı verilmektedir.</li>
          <li><strong>Akıllı Tarımsal Otomasyon ve Sensör Ağları:</strong> Toprak nem ölçerler, otomatik meteoroloji istasyonları, selenoid vanalar ve yapay zeka destekli sulama zamanlayıcıları.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">5. Devlet Teşvikli Sulama Yatırımı İçin Gerekli Başvuru Şartları Nelerdir?</h2>
        <p>
          Hibe onay komitesinden geçebilmek ve bütçeyi tarlanıza getirebilmek için sağlamanız gereken belirli <strong>başvuru şartları</strong> mevzuatta kesin hatlarla çizilmiştir:
        </p>
        <ol className="list-decimal pl-8 space-y-3">
          <li><strong>ÇKS (Çiftçi Kayıt Sistemi) Aktif Üyeliği:</strong> Başvuru yapılacak tarlanın o yıla ait tarımsal üretim desenini gösteren güncel ÇKS belgesi zorunludur.</li>
          <li><strong>Resmi Su Arama ve Kuyusu İzinleri:</strong> Sulama yapılacak su kaynağının yasal statüde olması gerekir. DSİ (Devlet Su İşleri)&apos;nden alınmış &quot;Yeraltı Suyu Kullanma Kullanım Belgesi&quot; veya akarsulardan su alma hakkını gösteren resmi tahsis evrakı projenin ilk şartıdır.</li>
          <li><strong>Mülkiyet ve Tapu Durumu:</strong> Tarlanın tapusu başvuru sahibine ait olmalıdır. Eğer arazi kiralıksa, kiralama sözleşmesinin noterde yapılmış olması ve genellikle en az 5 ila 10 yıl süreli olması (TKDK için 5, bazı büyük projeler için 10 yıl) gerekir.</li>
          <li><strong>Ziraat Mühendisi Onaylı Sulama Projesi:</strong> Lisanslı ve yetkili bir Ziraat Mühendisi (Tarımsal Yapılar ve Sulama mezunu) tarafından hazırlanmış, tarlanın eğimi, toprak yapısı, suyun kalitesi, boru çapı hesapları ve hidrolik basınç analizlerini içeren teknik proje dosyasının bulunması.</li>
          <li><strong>Vergi ve SGK Borcu Bulunmaması:</strong> Başvuru sahibinin kamuya vadesi geçmiş herhangi bir vergi ya da sosyal güvenlik borcunun olmaması gerekmektedir.</li>
        </ol>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">6. Sulama Destek Ölçütleri Karşılaştırma Tablosu</h2>
        <p>
          Destek veren kurumlar arasındaki temel farkları, limitleri ve fırsatları anlamanız için hazırladığımız karşılaştırma tablosu:
        </p>

        <div className="overflow-x-auto my-8 border-2 border-stone-100 rounded-2xl shadow-sm">
          <table className="min-w-full border-collapse bg-white">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Kriter / Destek Kurumu</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Tarım ve Orman Bak. (KKYDP)</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">TKDK (IPARD III)</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Cumhurbaşkanlığı & İl Özel İdare</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Temel Hibe Oranı</td>
                <td className="px-6 py-4 text-green-700 font-bold">%50 Net</td>
                <td className="px-6 py-4 text-green-700 font-bold">%50 - %75 (Genç/Kadın avantajlı)</td>
                <td className="px-6 py-4">%40 - %60 (Bölgeye göre değişir)</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">KDV Muafiyeti Var mı?</td>
                <td className="px-6 py-4 text-red-600">Yok (KDV çiftçi tarafından ödenir)</td>
                <td className="px-6 py-4 text-green-700 font-bold">Mevcut (%20 Ekstra Yatırım Avantajı)</td>
                <td className="px-6 py-4">Genellikle Yok</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">GES Projesi Entegrasyonu</td>
                <td className="px-6 py-4">Destekleniyor (%50 Hibe)</td>
                <td className="px-6 py-4 text-green-700 font-bold">Tam Entegre Destek (Yüksek Limit)</td>
                <td className="px-6 py-4">Sadece Kooperatiflere Hibeli</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Arazi Kiralama Şartı</td>
                <td className="px-6 py-4">Minimum 5 Yıllık Mukavele</td>
                <td className="px-6 py-4">Minimum 5-7 Yıllık Kesintisiz Kira</td>
                <td className="px-6 py-4 font-bold">Sadece Mülk Sahibi Tapu</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Proje Hazırlama Süresi</td>
                <td className="px-6 py-4">15 - 30 Gün (Hızlı Onay)</td>
                <td className="px-6 py-4 text-amber-600 font-bold">3 - 6 Ay (Akredite Danışman Şartı)</td>
                <td className="px-6 py-4">Bölgesel Duyuruya Bağlı</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">7. Hibe Başvurusu Yaparken Sık Yapılan Hatalar ve Altın Öneriler</h2>
        <p>
          Çiftçilerimizin veya yatırımcı firmaların hazırladığı projelerin büyük bir kısmı, çok basit ama hayati detaylar nedeniyle elenmektedir. Onay oranınızı artırmak için şu hususları kesinlikle gözden kaçırmayın:
        </p>
        <ul className="list-disc pl-8 space-y-4">
          <li><strong>Yetersiz Pompa Gücü Hesabı:</strong> Projede sunulan boru uzunluğu ve çapı ile satın alınacak dalgıç pompanın motor gücü hidrolik olarak birbiriyle uyumlu olmalıdır. Aşırı güçlü pompa seçip bütçeyi şişirmek ya da yetersiz debide pompa seçmek projenin teknik kurulda ret almasına veya revizyona gitmesine engel oluşturur.</li>
          <li><strong>Geçersiz ÇKS/Tapu Hissesi:</strong> Çok hisseli arazilerde, diğer hissedarlardan alınacak muvafakatnamelerin tescilsiz veya eksik imzalı olması başvuruyu doğrudan iptal ettirir.</li>
          <li><strong>Fatura ve Proforma Uyumsuzluğu:</strong> Tedarikçi firmalardan alınacak proforma faturalardaki teknik boru kodları, vanaların milimetre cinsinden değerleri ve proje çizimindeki teknik ibareler harfi harfine eşleşmelidir.</li>
        </ul>

        <div className="bg-[var(--green-light)] p-8 rounded-[32px] my-10 border-2 border-[var(--green-mid)]/20 shadow-sm">
          <h4 className="text-xl font-black mb-4 text-[var(--green-dark)]">Tarım Danışmanı Tavsiyesi</h4>
          <p className="font-bold text-stone-700 leading-relaxed">
            2026 yılında sulama yatırımı yapmayı düşünüyorsanız, devlet hibelerinin takvimlerini beklemeden 3-4 ay öncesinden DSİ su kullanım izinlerinizi ve tarlanızın toprak analizlerini tamamlayın. Hibeler açıklandığında genellikle başvuru süresi 30 ila 45 gün gibi çok kısa bir dilimle sınırlandırılmaktadır. Hazır bekleyen projelerin onaylanma şansı daima %90 daha fazladır.
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">8. Sonuç ve Gelecek Yatırım Planı</h2>
        <p>
          <strong>Sulama destekleri 2026</strong> imkanlarından doğru bir şekilde faydalanmak, ilk kurulum yükünüzü yarı yarıya hafifletirken tarlanızda ömürlük bir akıllı tarım devrimi yapmanızı sağlar. Modern borular, güneş panelleri ve otomatize vanalar sayesinde su israfını sonlandırıp kazancınızı güvenceye alın.
        </p>
        <p>
          Tarlanıza kurmayı planladığınız yeni sulama sistemi için gereken toplam boru uzunluğu, debi ihtiyacı ve bitki su tüketim bütçelerini önceden bilimsel olarak hesaplamaya ne dersiniz? Hibe projenizi hazırlamadan önce hemen ana sayfamıza dönerek <strong>Akıllı Tarımsal Sulama Hesaplama Sistemimizi</strong> ücretsiz kullanın, devlet projenize en doğru teknik verileri zemin hazırlayarak başlayın!
        </p>
      </div>
    )
  },
  "sogan-sulama-takvimi-ve-su-ihtiyaci": {
    title: "Soğan Sulama Takvimi ve Su İhtiyacı: Bilimsel ve Pratik Rehber",
    date: "29 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    readTime: "25 dk okuma",
    image: "https://images.unsplash.com/photo-1618512416390-58c06e7888ff?auto=format&fit=crop&w=2560&q=100",
    category: "Sebze Yetiştiriciliği",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium select-none">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic font-sans">
          Soğan yetiştiriciliği, yüksek pazar değeri ve mutfakların vazgeçilmez bir ürünü olması yönüyle Türkiye tarımında son derece kritik ve karlı bir yere sahiptir. Ancak, tarlanızdan yüksek dekar verimi ve raf ömrü uzun, pürüzsüz baş yapısına sahip kaliteli soğanlar hasat etmenin en temel şartı, bilimsel kurallara uygun olarak tasarlanmış bir <strong>soğan sulama</strong> programı uygulamaktır. Soğan bitkisi, yüzeysel kök yapısı nedeniyle toprak nemine aşırı derecede duyarlıdır. Bu kapsamlı ziraat rehberinde; soğan bitkisinin yaşam döngüsü boyunca su ihtiyaçlarını, büyüme dönemlerine göre sulama zamanlamasını, kritik hasat öncesi sulama stratejilerini ve toprak nemi yönetiminin inceliklerini bilimsel veriler eşliğinde öğreneceksiniz.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">1. Soğan Bitkisinin Fizyolojik Kök Yapısı ve Toprak Nemi İlişkisi</h2>
        <p>
          Soğan (Allium cepa), tek çenekli (monokotiledon) ve saçak köklü bir bitkidir. Bu morfolojik yapı, soğan bitkisini su yönetimi açısından en hassas sebzelerden biri haline getirmektedir. Soğanın saçak kökleri toprağın derinliklerine inemez; köklerin yaklaşık %80 ile %90'ı toprağın sadece ilk 20-30 cm'lik (aktif kök bölgesi) yüzey tabakasında yoğunlaşır. Köklerin yanal yayılımı da oldukça sınırlıdır.
        </p>
        <p>
          Bu zayıf kök mimarisi sebebiyle, soğan bitkisi derin toprak katmanlarında saklı duran yedek nem rezervlerinden kesinlikle faydalanamaz. Dolayısıyla üst katmandaki <strong>toprak nemi</strong> düzeyi düştüğü anda, bitki derin bir su stresine girer. Toprak neminin tarla kapasitesinin %60-70 seviyesinin altına inmesine izin verilmemelidir. Nemsiz kalan topraklarda yaprak gelişimi durur, stomalar kapanarak fotosentez hızı kesilir ve sonuçta küçük, pazar değeri düşük soğan başları oluşur.
        </p>
        <p>
          Bunun aksine, toprağın aşırı ıslak olması, göllenmesi ve havasız kalması da soğan kökleri için yıkıcıdır. Oksijensiz kalan kökler hızla çürür, bitki besin elementlerinin emilimi durur ve pembe kök çürüklüğü (Phoma terrestris) ile taban çürüklüğü (Fusarium) gibi tehlikeli mantar hastalıkları tarlayı tamamen sarabilir. Bu nedenle başarılı bir <strong>soğan sulama</strong> planlaması, toprağı çamurlaştırmadan daima optimum düzeyde nemli tutmayı hedefleyen hassas bir dengeyi esas alır.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">2. Soğan Sulama Takvimi: Kritik Büyüme Dönemleri</h2>
        <p>
          Soğan tarımında toplam su ihtiyacı iklim koşullarına, ekim zamanına (arşınlık/tohumdan veya arpacıktan/kıska) ve toprak tipine göre değişmekle birlikte, bitki sezon boyunca ortalama 400-600 mm net suya ihtiyaç duyar. Bu ihtiyacın karşılanması, soğanın farklı <strong>büyüme dönemleri</strong> baz alınarak takvimlendirilmelidir.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">A) Çimlenme ve Çıkış Dönemi</h3>
        <p>
          Soğan tohumla doğrudan tarlaya ekildiğinde, tohumların şişip çimlenebilmesi ve toprak yüzeyine sağlıklı çıkabilmesi için ilk 2-3 haftalık evrede üst toprak katmanının sürekli nemli tutulması elzemdir. Bu evrede hafif ama sık aralıklarla sulama yapılmalıdır. Tohumların ekim derinliği sığ (1.5 - 2 cm) olduğundan, rüzgar ve güneş etkisiyle bu tabaka çok hızlı kurur. Tohum kabuğunun sertleşmeden kırılmasını sağlamak için toprak nemi titizlikle korunmalı, kaymak tabakası oluşumuna karşı gerekirse mini sprinkler veya hafif yağmurlama sulama tercih edilmelidir. Arpacık (kıska) dikiminde ise çıkış daha hızlı olduğundan bu evre daha kolay atlatılır, ancak yine de toprak tavında dikim yapılması ve ilk can suyunun geciktirilmeden verilmesi şarttır.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">B) Vejetatif (Yaprak Gelişim) Dönemi</h3>
        <p>
          Çıkış tamamlandıktan sonra bitki hızla yaprak üretmeye başlar. Bu dönemde soğan sulama sıklığı toprağın bünyesine bağlı olarak haftada 1-2 sefer şeklinde ayarlanır. Soğanın toplam yaprak sayısı ile nihai baş büyüklüğü arasında doğrudan doğrusal bir ilişki vardır. Bitki ne kadar çok ve sağlıklı yaprak yaparsa, fotosentez kapasitesi o kadar yüksek olur ve baş bağlama döneminde yumruya o kadar fazla karbonhidrat depolar. Dolayısıyla yaprak gelişim döneminde bitkinin susuzluk stresine maruz kalması yaprak sayısını kısıtlayarak verimde kalıcı kayba yol açar. Bu evrede azotlu gübrelemenin de suyla birlikte verilmesi (fertigasyon) bitkinin yeşil aksam gücünü katlar.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">C) Baş (Yumru) Oluşum ve Şişme Dönemi (En Kritik Aşama)</h3>
        <p>
          Yaprakların tabanlarında kalınlaşma başlayıp baş veya yumru oluşum evresine girildiğinde, bitkinin günlük su tüketimi zirve noktasına ulaşır. Bu dönem genellikle gün uzunluğunun arttığı ve havaların ısındığı Haziran-Temmuz aylarına denk gelir. Soğanın su tüketim katsayısı (Kc) bu aşamada 1.05 seviyesine ulaşır ki bu, bitkinin en yüksek miktarda terleme (evapotranspirasyon) yaptığı andır.
        </p>
        <p>
          Baş şişme döneminde yapılacak herhangi bir sulama aksaması, başların küçük kalmasına veya soğanların \"çift başlı\" (bölünmüş) olmasına neden olur. Ayrıca düzensiz sulama (yani toprağın çok kuruyup ardından aşırı sulanması turgor dengesini bozarak) soğanlarda iç çatlamalara ve pazar değerinin tamamen kaybolmasına yol açar. Toprak nemi sürekli izlenmeli, kumlu topraklarda 2-3 günde bir, ağır killi topraklarda ise 5-7 günde bir düzenli sulama periyotları aksatılmadan sürdürülmelidir.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">D) Olgunlaşma ve Hasat Dönemi</h3>
        <p>
          Başlar istenen büyüklüğe ulaştıktan sonra yaprakların renkleri koyudan sarıya dönmeye başlar ve yaprak boyunları yumuşayarak devrilir (soğanların yatması). Bu fizyolojik süreç, soğanın büyümesini tamamladığını ve gıdayı tamamen başa depoladığını gösterir. Bu evrede su tüketimi hızla düşer. Bu aşamadaki su yönetimi tamamen depolama ömrünü belirler.
        </p>

        <div className="overflow-x-auto my-8 border-2 border-stone-100 rounded-2xl shadow-sm">
          <table className="min-w-full border-collapse bg-white">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Gelişim Evresi</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Kritik Süreç</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">İdeal Toprak Nemi Seviyesi</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Kritik Su Tasarruf Rolü</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Çimlenme ve Çıkış</td>
                <td className="px-6 py-4">0 - 20 Gün</td>
                <td className="px-6 py-4 text-blue-600 font-bold">%75 - %80 Tarla Kapasitesi</td>
                <td className="px-6 py-4">Sığ ekilen tohumların kurumasını ve kaymak tabakasını engeller.</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Vejetatif Gelişme</td>
                <td className="px-6 py-4">20 - 60 Gün</td>
                <td className="px-6 py-4 text-green-700">%65 - %70 Tarla Kapasitesi</td>
                <td className="px-6 py-4">Maksimum yaprak sayısına ulaşarak fotosentez alanını genişletir.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Baş Yapısı Oluşumu ve Şişme</td>
                <td className="px-6 py-4">60 - 110 Gün</td>
                <td className="px-6 py-4 text-red-600 font-bold">%70 - %75 Tarla Kapasitesi (Asla Susuz Kalmamalı)</td>
                <td className="px-6 py-4">Başların iri, tek düze ve dolgun olmasını sağlar, iç çatlamaları önler.</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Olgunlaşma ve Yaprak Devrilmesi</td>
                <td className="px-6 py-4">110 - 130 Gün</td>
                <td className="px-6 py-4 text-amber-600">%40 - %50 Tarla Kapasitesi (Sulama Azaltılır)</td>
                <td className="px-6 py-4">Yumrunun dış kabuk bağlamasını ve hasada hazırlanmasını destekler.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Hasat Öncesi Dönem</td>
                <td className="px-6 py-4">Hasattan 2-3 Hafta Önce</td>
                <td className="px-6 py-4 text-red-700 font-bold">%0 - %30 (Sulama Tamamen Kesilir)</td>
                <td className="px-6 py-4">Depolama kalitesini artırır, çürümeyi ve erken filizlenmeyi önler.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">3. Hasat Öncesi Sulama Yönetimi: Su Ne Zaman Kesilmeli?</h2>
        <p>
          Soğan yetiştiriciliğinde üreticilerin depo kalitesi yönünden en sık düştüğü hata, olgunlaşmakta olan soğanları hasat gününe kadar sulamaya devam etmektir. <strong>Hasat öncesi sulama</strong> zamanlaması, soğanın uzun süre depolanıp zarar görmeden saklanabilmesi, yani \"raf ömrü\" için en belirleyici kriterdir.
        </p>
        <p>
          Tarladaki soğanların yaklaşık %15 ile %25'inin yaprak boyunları doğal olarak kırılıp devrildiğinde (yatma belirtisi), son derece önemli olan <strong>soğan sulama</strong> işlemi tamamen sonlandırılmalıdır. Genellikle bu süre, planlanan söküm hasat tarihinden yaklaşık 15 ila 21 gün öncesine denk gelir.
        </p>
        <p>
          Bu kritik dönemde sulamanın tamamen kesilmesinin ziraat bilimindeki gerekçeleri şunlardır:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Dış Kabuk Kalitesi:</strong> Suyun kesilmesiyle birlikte soğan başı, kendisini koruyan ve pazar değerini belirleyen o rengarenk, gevrek dış kabuk katmanlarını (curing - olgunlaşma aşaması) sağlıklı bir şekilde sentezler. Geç sulanan soğanların dış kabukları kalınlaşamaz, çabuk soyulur ve iç eti mantari enfeksiyonlara açık hale gelir.</li>
          <li><strong>Mantar ve Bakteri Hastalıklarının Önlenmesi:</strong> Hasat döneminde toprağın hala çamur veya aşırı nemli olması, baş soğanlarda fungal boyun çürüklüğü (Botrytis allii) ve bakteriyel iç çürüklük (Erwinia) risklerini tavan yaptırır. Bu hastalıklar tarlada fark edilmeyebilir ancak depoda tüm mahsulün çürümesine yol açar.</li>
          <li><strong>Erken Filizlenme ve Depolama Sürgünleri:</strong> Hasat öncesi fazla su alan ve dinlenmeye geçemeyen soğanların uyku (dormansi) süresi kısalır. Bu soğanlar depoya konulduktan kısa süre sonra yeşillenmeye ve filizlenmeye başlayarak pazar niteliğini tamamen yitirir.</li>
        </ul>

        <div className="bg-[var(--green-light)] p-8 rounded-[32px] my-10 border-2 border-[var(--green-mid)]/20 shadow-sm">
          <h4 className="text-xl font-black mb-4 text-[var(--green-dark)]">Uzman Ziraat Mühendisi Tavsiyesi</h4>
          <p className="font-bold text-stone-700 leading-relaxed font-sans">
            Eğer tarlanızda hasat öncesindeki son 2-3 haftalık dilimde sağanak yağışlar bekleniyorsa, sökümü mutlaka öne çekin veya toprağın drenaj kanallarını açık tutarak suyun hızla tahliye olmesini sağlayın. Islak topraktan sökülen soğanların mutlaka tarlada rüzgar alan gölgelik bir alanda 5-7 gün kurutulması (namlu yapma) gerekir. Asla ıslak kalmış soğanları doğrudan çuvallara koyup depolara sevk etmeyin.
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">4. Soğan Sulama İçin En Etkili Sulama Teknolojileri</h2>
        <p>
          Soğandan hem su tasarrufu sağlamak hem de dekar başına 6-8 ton gibi yüksek verimler almak için geleneksel salma/vahşi sulama yöntemlerinden kesinlikle uzak durulmalıdır. Soğan tarımında uygulanan başlıca modern sulama teknolojileri şunlardır:
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">A) Damla Sulama Sistemi (En İdeal Çözüm)</h3>
        <p>
          Toprak nemini en iyi şekilde koruyan ve gübreleme kolaylığı sunan damla sulama yöntemi soğan yetiştiriciliğinde standart haline gelmiştir. Sıra aralığı 20-30 cm olacak şekilde ayarlanan soğan yataklarında (lateral boru hatlarında), damlatıcılar genellikle 20 cm aralıklarla yerleştirilir. Damlatıcı debisinin saatte 1.0 - 1.6 litre olması idealdir.
        </p>
        <p>
          Damla sulamanın avantajları:
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li>Sadece bitki kök bölgesini ıslatarak yabancı ot gelişimini minimize eder.</li>
          <li>Yapraklar kuru kaldığı için mildiyö ve pas gibi tehlikeli yaprak hastalıklarının önünü keser.</li>
          <li>Sıvı gübrelerin (özellikle fosfor, potasyum ve kalsiyum) doğrudan suyla verilmesini (fertigasyon) sağlar.</li>
          <li>Su kullanımını geleneksel yöntemlere kıyasla %50 oranında azaltarak enerji ve su tasarrufu sağlar.</li>
        </ul>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">B) Yağmurlama (Sprinkler) Sulama Sistemi</h3>
        <p>
          Özellikle tohum ekimi sonrasında homojen çimlenme elde etmek ve geniş arazilerde işçilik maliyetlerini düşürmek için yağmurlama sulama da yaygın kullanılır. Ancak yaprakların sürekli ıslanması hastalık riskini artırır. Eğer yağmurlama kullanılacaksa, sulamalar mutlaka sabahın çok erken saatlerinde yapılmalıdır ki, rüzgar ve güneş ile yapraklar öğlene kadar tamamen kuruyabilsin. Baş bağlama evresinden sonra yağmurlama yapılması, tazyikli suyun yaprakları kırma ve devirme riski nedeniyle pek önerilmez.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">5. Toprak Nemi Ölçümü ve Kontrol Yöntemleri</h2>
        <p>
          Bilimsel bir <strong>soğan sulama</strong> programı yürütebilmek için topraktaki nem miktarı düzenli takip edilmelidir. Bunun için iki ana metot kullanılır:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Tansiyometreler ve Nem Sensörleri:</strong> Akıllı tarım teknolojilerinin başında gelen nem sensörleri, soğanın aktif kök derinliği olan 15 cm ve 30 cm derinliklerine yerleştirilir. Sensörlerden gelen veriler, toprak tansiyonunun 20-30 santibar (cb) arasında kalıp kalmadığını gösterir. 40-50 cb seviyeleri aşılıyor ise soğan bitkisinin acilen sulanması gerekir.</li>
          <li><strong>Pratik Avuç Sıkma (Elle Kontrol) Testi:</strong> Teknolojik aletleriniz yoksa, soğanın kök bölgesinden (15-20 cm derinlikten) bir avuç toprak alın ve avucunuzda sıkın. Toprak dağılmadan şeklini koruyor ve elinizde hafif ıslaklık bırakıyorsa nem seviyesi mükemmeldir (tarla kapasitesindedir). Toprak sıkıldığında toz gibi ufalanıyorsa veya parmaklarınızın arasından dökülüyorsa bitki su stresine girmiştir. Toprak sıktığınızda çamur gibi suyu süzülüyorsa aşırı sulama yapılmıştır ve drenaj sorunu olabilir.</li>
        </ul>

        <div className="bg-[var(--green-dark)] text-white p-10 rounded-[40px] my-10 shadow-lg border border-[var(--green-mid)]">
          <h4 className="text-2xl font-black mb-4 text-white">Toprak Nemini ve Su İhtiyacını Dijital Yönetin!</h4>
          <p className="font-bold text-white/90 font-sans">
            Tarlanızın toprak yapısına, bulunduğunuz şehrin güncel hava sıcaklığına ve soğanlarınızın hangi büyüme aşamasında olduğuna göre bugün kaç mm sulama yapmanız gerektiğini tam ziraat mühendisliği standartlarında öğrenmek ister misiniz? Hemen ana sayfamıza dönerek tamamen ücretsiz <strong>Akıllı Tarımsal Sulama Hesaplama Aracımızı</strong> kullanın, suyunuzu milimetrik yöneterek hasat veriminizi zirveye taşıyın!
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">6. Sonuç ve Bereketli Hasat Planı</h2>
        <p>
          Sürdürülebilir tarımın her şeyden daha önemli hale geldiği 2026 yılında, suyumuzu tasarruflu ve akıllıca yönetmek hem geleceğimiz hem de çiftçimizin cebi için kaçınılmaz bir zorunluluktur. Doğru büyüme dönemleri analizi çerçevesinde yürütülen, hasat öncesi sulama takvimine harfiyen uyan ve düzenli <strong>toprak nemi</strong> ölçümlerine dayalı bir <strong>soğan sulama</strong> programı ile tarlanızın bereketini katlayabilirsiniz. Bereketli topraklar, sürdürülebilir gelecek ve bilinçli sulama ile üretmeye devam edelim!
        </p>
      </div>
    )
  },
  "arpa-sulama-rehberi-kislik-ve-yazlik-arpa-icin-sulama-tavsiyeleri": {
    title: "Arpa Sulama Rehberi — Kışlık ve Yazlık Arpa İçin Sulama Tavsiyeleri",
    date: "30 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    readTime: "30 dk okuma",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=2560&q=100",
    category: "Tahıl Yetiştiriciliği",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium select-none">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic font-sans">
          Arpa (Hordeum vulgare), binlerce yıldır Anadolu topraklarının en kadim, en stratejik tahıllarından biridir. Genellikle kuraklığa dayanıklı bir bitki olarak bilinse de, modern ziraat teknikleri göstermektedir ki, dengeli ve bilimsel bir <strong>arpa sulama</strong> programı uygulanması dekar başına alınan tane verimini doğrudan ikiye hatta üçe katlayabilmektedir. Arpa tarımında hem kışlık hem de yazlık çeşitlerin kendilerine özgü su tüketim alışkanlıkları ve kritik büyüme evreleri bulunmaktadır. Bu bilimsel ve pratik rehberde, kışlık ve yazlık arpanın su ihtiyaçlarını, büyüme dönemlerine göre sulama zamanlamasını, bölgelere göre değişen su miktarı gereksinimlerini ve toprağın nem dengesini nasıl yöneteceğinizi tüm ayrıntılarıyla ele alacağız.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">1. Arpada Su Tüketimi ve Kritik Büyüme Dönemleri</h2>
        <p>
          Arpa bitkisi, buğdaya göre daha kısa bir vejetasyon süresine sahiptir ve suya olan hassasiyeti belirli büyüme dönemlerinde en üst seviyeye ulaşır. Toplamda sezon boyunca arpanın net su ihtiyacı 350-500 mm arasındadır. Bu miktarın bir kısmı doğal yağışlarla karşılansa da, yağışların yetersiz kaldığı yarı kurak bölgelerimizde yapay sulama desteği kaçınılmaz hale gelir. <strong>Arpa sulama</strong> takvimini belirleyen en kritik fizyolojik evreler şunlardır:
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">A) Çimlenme ve Çıkış Dönemi</h3>
        <p>
          Tohumun toprakla buluşmasından hemen sonra çimlenebilmesi için toprak neminin uygun düzeyde olması gerekir. Kışlık ekimlerde genellikle sonbahar yağışları bu can suyunu karşılar. Ancak kurak geçen sonbahar aylarında veya yazlık arpa ekiminde, tohumun toprak altında bekleyip çürümesini önlemek ve homojen bir çıkış elde etmek amacıyla hafif bir çıkış sulaması yapılması gerekebilir. Bu dönemde suun gereğinden fazla verilmesi toprağın havasız kalmasına ve tohumların zayi olmasına yol açar.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">B) Kardeşlenme Dönemi</h3>
        <p>
          Kardeşlenme, arpanın dip kısımlarından yeni sürgünler oluşturarak başak taşıyacak sap sayısını belirlediği kritik bir evredir. Bu dönemde yaşanacak bir su stresi, bitkinin kardeş sayısını doğrudan azaltarak nihai başak yoğunluğunu düşürür. Dolayısıyla toprak neminin yeterli düzeyde tutulması, dekar veriminin temelini oluşturur. Kışlık arpa bu dönemi genellikle kış aylarında yağışlar altında geçirirken, yazlık arpada bu evre ilkbahara denk gelir ve sulama desteği gerekebilir.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">C) Sapa Kalkma Dönemi (En Duyarlı İkinci Aşama)</h3>
        <p>
          Bitkinin dikey boy kazandığı, boğumların oluştuğu ve başak taslağının sap içinde hızla geliştiği sapa kalkma dönemi, arpanın günlük su tüketiminin hızla tırmandığı bir evredir. Bu dönemde yetersiz nem, bitki boyunun kısa kalmasına, sapın zayıflamasına ve başaktaki başakçık sayısının azalmasına yol açar. Eğer ilkbahar yağışları yetersiz ise, bu evrede mutlaka birinci sulama suyu tarlaya tatbik edilmelidir.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">D) Başaklanma ve Çiçeklenme Dönemi (Zirve Su İhtiyacı)</h3>
        <p>
          Başakların kından tamamen çıktığı ve çiçeklenmenin başladığı bu evre, <strong>arpa sulama</strong> programlarındaki en kritik dönemeçtir. Bitkinin suya en hassas olduğu andır. Bu aşamada meydana gelecek susuzluk, tozlaşmayı olumsuz etkiler, başakçıkların kısır kalmasına sebep olur ve sonuçta başaktaki dane sayısını ciddi şekilde düşürür. Toprak nemi bu dönemde tarla kapasitesinin %60'ının altına asla inmemelidir.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">E) Süt ve Sarı Olum Dönemi (Dane Dolumu)</h3>
        <p>
          Çiçeklenmenin ardından tanenin içine nişasta ve besin elementlerinin depolandığı, süt olum ve sarı olum evreleri başlar. Bu dönemde tarlanın nemsiz kalması tanelerin cılız, büzüşük ve zayıf olmasına (hektolitre ağırlığının düşük kalmasına) neden olur. Süt olumda verilecek hafif bir sulama, tanelerin dolgun ve iri olmasını sağlar. Ancak sarı olum evresine girildikten sonra sulama tamamen kesilmelidir. Hasat öncesi geç sulama yapmak, yatmaya, tanenin kararmasına, mantar hastalıklarına ve arpanın sanayide/bira sektöründe istenmeyen yüksek protein oranlarına ulaşmasına yol açabilir.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">2. Kışlık ve Yazlık Arpa Arasında Sulama Rejimi Farklılıkları</h2>
        <p>
          Türkiye'de arpa üretimi ekim zamanına göre kışlık ve yazlık olmak üzere iki ana gruba ayrılır. Bu iki tipin kök gelişim süreçleri ve iklimsel koşulları farklı olduğundan <strong>arpa sulama</strong> rejimleri de değişir:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Kışlık Arpa:</strong> Sonbaharda ekilir ve kışı toprak altında veya kardeşlenme başlangıcında geçirir. Kışlık arpa, güçlü bir kök sistemi geliştirir ve kış ile erken ilkbahar yağışlarından azami derecede faydalanır. Bu nedenle kışlık arpa genellikle daha az sulama suyuna ihtiyaç duyar. Çoğu zaman İç Anadolu gibi bölgelerde ilkbahar sonu (sapa kalkma/başaklanma evresinde) tek bir sulama veya mevsimin çok kurak gitmesi durumunda iki sulama yüksek verim için yeterli olmaktadır.</li>
          <li><strong>Yazlık Arpa:</strong> Erken ilkbaharda ekilir ve vejetasyon süresi kışlık arpa kadar uzun değildir. Hızlı büyümek zorundadır. Kök sistemi kışlık arpa kadar derinlere inemez. Bu durum yazlık arpayı kuraklığa karşı çok daha dayanıksız hale getirir. Yazlık arpa yetiştiriciliğinde ilkbahar ve erken yaz sulamaları çok daha hayati öneme sahiptir. Toprak nemi sürekli takip edilmeli, sapa kalkma, başaklanma ve süt olum dönemlerinde sulamalar aksatılmadan, toprak yapısına göre 2 veya 3 kez sulama yapılmalıdır.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">3. Türkiye Bölgelerine Göre Arpa Sulama Stratejileri</h2>
        <p>
          Türkiye'nin farklı tarım havzalarındaki yağış rejimleri ve sıcaklık eğrileri, <strong>arpa sulama</strong> ihtiyaçlarını doğrudan şekillendirir. Bölgelerimize göre en rasyonel sulama yaklaşımları şu şekildedir:
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">A) İç Anadolu Bölgesi</h3>
        <p>
          İç Anadolu, Türkiye arpa üretiminin kalbidir. Yıllık yağış ortalaması 300-400 mm civarındadır ve yağışların büyük kısmı kış ile ilkbahar aylarında düşer. Bölgede kışlık arpa yaygındır. Genellikle nisan sonu ve mayıs aylarındaki ilkbahar kuraklıkları bitkiyi strese sokar. İç Anadolu'da yüksek verim (dekar başına 500-700 kg) elde etmek için sapa kalkma döneminde (Mayıs ortası) 1 sulama ve başaklanma döneminde (Mayıs sonu - Haziran başı) 1 sulama olmak üzere toplam 2 sulama yapılması standart bir uygulamadır.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">B) Güneydoğu Anadolu Bölgesi</h3>
        <p>
          Güneydoğu Anadolu'da sıcaklıklar ilkbahar aylarından itibaren çok hızlı yükselir ve buharlaşma (evapotranspirasyon) oranları tavan yapar. Bölgede arpa hızlı gelişir ve erken hasat edilir. Sıcak esen rüzgarların taneyi kurutmasını (sam yeli etkisi) önlemek için nisan ayında sapa kalkma ve başaklanma evrelerinde mutlaka sulama yapılmalıdır. Güneydoğu'da genellikle toprak yapısına göre 2 ila 3 sulama önerilir. Sunulacak su miktarı buharlaşma kaybını telafi edecek kadar yüksek olmalıdır.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">C) Doğu Anadolu ve Geçit Bölgeleri</h3>
        <p>
          Doğu Anadolu'da kışlar sert ve uzun, ilkbahar ise geç gelir. Bu bölgede genellikle yazlık arpa yetiştiriciliği de yaygındır. Kış yağışlarının erimesiyle toprak ilkbahar başında neme doygundur. Ancak haziran ve temmuz aylarındaki hızlı sıcaklık artışlarında sapa kalkma ve başaklanma evreleri sulanmalıdır. Genellikle yüksek rakımlarda 1 veya 2 sulama yeterli olurken, killi-tınlı toprak yapılarında nem uzun süre muhafaza edilir.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">4. İdeal Su Miktarı ve Toprak Nemi Yönetimi</h2>
        <p>
          Her bir sulamada tarlaya verilecek net <strong>su miktarı</strong>, toprağın bünyesine (kumlu, tınlı, killi), o dönemdeki buharlaşma hızına ve kök derinliğine göre hesaplanır. Arpanın aktif kök derinliği 60-90 cm arasındadır; ancak su ve besin alımının en yoğun olduğu bölge ilk 30-40 cm'lik katmandır.
        </p>
        <p>
          Genel bir kural olarak, killi ve tınlı topraklarda her bir sulamada dekar başına 60-80 m³ (60-80 mm) su verilmesi önerilir. Kumlu topraklarda ise su tutma kapasitesi düşük olduğu için su miktarı azaltılmalı (dekar başına 40-50 m³) ama sulama sıklığı artırılmalıdır. Sulama yaparken toprağın doygunluk seviyesine getirilmesi ama tarlada su birikintileri (göllenme) oluşmasına izin verilmemesi gerekir. Göllenen sular arpa köklerini boğarak sararmaya ve kardeş ölümüne neden olur.
        </p>

        <div className="bg-[var(--green-light)] p-8 rounded-[32px] my-10 border-2 border-[var(--green-mid)]/20 shadow-sm">
          <h4 className="text-xl font-black mb-4 text-[var(--green-dark)]">Teknik Ziraat Notu: Protein ve Verim Dengesi</h4>
          <p className="font-bold text-stone-700 leading-relaxed font-sans">
            Yemlik arpa yetiştiriyorsanız, yüksek protein oranı istenir, bu nedenle hafif bir su stresi kabul edilebilir. Ancak maltlık (bira sanayi) arpa yetiştiriyorsanız, protein oranının düşük (%9-11 arası) olması beklenir. Maltlık arpada başaklanma ve süt olum dönemlerinde düzenli sulama yapmak, taneyi dolgunlaştırıp protein konsantrasyonunu düşürerek pazar değerini artırır.
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">5. Arpa Tarımında Kullanılan Modern Sulama Sistemleri</h2>
        <p>
          Arpa tarımı geniş alanlarda yapıldığı için işçilik ve su verimliliği yüksek sistemler tercih edilmelidir:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Yağmurlama Sulama (En Yaygın ve Verimli Yöntem):</strong> Arpada en ideal sulama yöntemidir. Tarla yüzeyinin tamamına homojen su dağılımı sağlar. Rüzgarsız günlerde, özellikle sabah erkenden veya akşamüstü çalıştırılan sprinkler sistemleri evaporasyon kayıplarını minimuma indirir. Yağmurlama başlıklarının basınç değerleri toprağı aşındırmayacak şekilde (3-4 bar) ayarlanmalıdır.</li>
          <li><strong>Pivot ve Lineer Sulama Sistemleri:</strong> Çok büyük arazilerde (100 dekar ve üzeri) işçiliği sıfıra indiren dairesel (Center Pivot) sistemler yüksek su tasarrufu ve hassas otomasyon sunar. Güneydoğu ve İç Anadolu'daki devasa tahıl işletmelerinde tercih edilir.</li>
          <li><strong>Salma / Karık Sulama (Önerilmeyen Yöntem):</strong> Su israfına yol açması, tarlada düzensiz ıslanmaya bağlı olarak bazı bölgelerde kök çürüklüğüne, bazı bölgelerde ise kuraklığa sebep olması nedeniyle arpa üretiminde modern ziraatte artık yeri yoktur. Toprağın erozyona uğramasına ve tuzlanmaya da zemin hazırlar.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950 font-sans">6. Arpa Sulama Takvimi Karşılaştırma Tablosu</h2>
        <p>
          Arpa üreticilerimizin sulama kararlarını en hızlı şekilde verebilmeleri için hazırladığımız pratik takvim tablosu:
        </p>

        <div className="overflow-x-auto my-8 border-2 border-stone-100 rounded-2xl shadow-sm">
          <table className="min-w-full border-collapse bg-white">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Gelişim Evresi</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Toprak Nemi Kriteri</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Önerilen Su Miktarı (Dekara)</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Verime / Tane Kalitesine Doğrudan Etkisi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Kardeşlenme</td>
                <td className="px-6 py-4">%60 Tarla Kapasitesi</td>
                <td className="px-6 py-4">40 - 50 m³</td>
                <td className="px-6 py-4">Metrekaredeki verimli başak sayısını ve kardeş adedini belirler.</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Sapa Kalkma</td>
                <td className="px-6 py-4 text-blue-600 font-bold">%65 - %70 Tarla Kapasitesi</td>
                <td className="px-6 py-4">60 - 70 m³</td>
                <td className="px-6 py-4">Sap boyunu ve başakta oluşacak dane taslağı kapasitesini artırır.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Başaklanma / Çiçeklenme</td>
                <td className="px-6 py-4 text-red-600 font-bold">%70 - %75 Tarla Kapasitesi (Çok Kritik)</td>
                <td className="px-6 py-4">70 - 80 m³</td>
                <td className="px-6 py-4">Dane tutumunu maksimize eder, kısırlığı engeller ve verimi zirveye taşır.</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Süt Olum Evresi</td>
                <td className="px-6 py-4 text-green-700">%50 - %60 Tarla Kapasitesi</td>
                <td className="px-6 py-4">40 - 50 m³</td>
                <td className="px-6 py-4">Tanenin cılız kalmasını önler, hektolitre ağırlığını ve dolgunluğu yükseltir.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Sarı Olum ve Hasat</td>
                <td className="px-6 py-4 text-red-700 font-bold">Nem İzlenmez (Su Tamamen Kesilir)</td>
                <td className="px-6 py-4">0 m³ (Sulama Yok)</td>
                <td className="px-6 py-4">Yatmayı engeller, tanede aşırı nem birikimini ve çürümeyi önler.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[var(--green-dark)] text-white p-10 rounded-[40px] my-10 shadow-lg border border-[var(--green-mid)]">
          <h4 className="text-2xl font-black mb-4 text-white">Arpa Tarlanız İçin Akıllı Su Hesabı Yapın!</h4>
          <p className="font-bold text-white/90 font-sans">
            Tarlanızın koordinatlarına bağlı yıllık yağış verilerini, ekili arpa çeşidinizin (kışlık/yazlık) güncel vejetasyon evresini ve toprak tipinizi sisteme girerek bugün vermeniz gereken su miktarını milimetrik ölçebilir misiniz? Hemen ana sayfamıza dönün ve tamamen ücretsiz olan <strong>Akıllı Tarımsal Sulama Hesaplama Sistemimizi</strong> kullanmaya başlayarak tasarruf edin, veriminizi garantileyin!
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950 font-sans">7. Sonuç ve Bereketli Hasat Planlaması</h2>
        <p>
          2026 yılı tarımsal üretim şartlarında, iklim değişikliği ve azalan su kaynakları göz önünde bulundurulduğunda, bilinçli ve kontrollü bir <strong>arpa sulama</strong> programı yürütebilmek üreticilerimiz için en büyük rekabet avantajıdır. Doğru büyüme dönemleri takip edilerek, gelişim evresi ihtiyaçlarına uygun su miktarı verilmesi hem toprağın yapısını korur hem de dekar başına rekor düzeyde verimli hasatlar yapmanızı sağlar. Bilimi ve teknolojiyi tarlanıza taşıyarak su israfını sonlandırın, bereketli kazançlara kapı aralayın!
        </p>
      </div>
    )
  },
  "kavun-ve-karpuz-sulama-rehberi": {
    title: "Kavun ve Karpuz Sulama Rehberi: Kaliteli ve Şeker Oranı Yüksek Meyve Yetiştirme İpuçları",
    date: "31 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    readTime: "30 dk okuma",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=2560&q=100",
    category: "Sebze Yetiştiriciliği",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium select-none">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic font-sans">
          Karpuz (Citrullus lanatus) ve kavun (Cucumis melo), kabakgiller (Cucurbitaceae) familyasının yaz aylarında sofralarımızı süsleyen en tatlı, en ferahlatıcı üyeleridir. Meyvelerinin ağırlıkça %90 ile %92'si sudan oluşan bu bitkiler, tarladaki gelişim süreçleri boyunca su dengesine karşı fevkalade hassastır. Yanlış, kontrolsüz ve düzensiz yapılan sulamalar meyvelerde çatlamaya, tatsızlığa (brix değerinin düşmesine) veya mantari kök çürüklüklerine yol açarak verimi sıfıra indirebilir. Bu bağlamda, profesyonel düzeyde tasarlanmış bir <strong>kavun karpuz sulama</strong> programı sadece yüksek tonaj elde etmek için değil, aynı zamanda pazar değerini belirleyen asıl değerler olan tat, aroma, kabuk kalınlığı ve nakliye dayanıklılığını yakalamak için de mutlak bir zorunluluktur. Bu kapsamlı ziraat rehberinde; kavun ve karpuz fidelerinin dikiminden hasat anına kadar olan tüm kritik sulama evrelerini, modern sulama yöntemlerini ve bilimsel sulama tekniklerini en ince ayrıntısıyla inceleyeceğiz.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">1. Kabakgillerin Kök Fizyolojisi ve Toprak Nem Dengesi</h2>
        <p>
          Kavun ve karpuz bitkileri kök morfolojileri açısından oldukça dinamik bir yapıya sahiptir. Bitki, gelişiminin ilk evresinde güçlü bir kazık kök oluşturur. Bu kazık kök yapısı toprağın 1-1.5 metre derinliklerine kadar hızla inme kabiliyetine sahiptir. Ancak bitkinin aktif su ve besin elementi alışverişini gerçekleştiren asıl emici kökleri (saçak kökler) toprak yüzeyinin ilk 30-40 cm'lik katmanında yoğunlaşır.
        </p>
        <p>
          Bu kök sistemi nedeniyle, toprak neminin sürekli kontrol edilmesi ve köklerin havasız bırakılmaması gerekir. Toprağın aşırı çamur ve göllenme halinde olması, toprak gözeneklerindeki oksijeni tamamen yok edeceğinden saçak köklerin nefes alamayarak çürümesine sebep olur. Özellikle Fusarium solgunluğu ve Phytophthora kök boğazı çürüklüğü gibi tehlikeli toprak kökenli mantarlar, aşırı nemli ve havasız topraklarda hızla aktif hale gelmektedir. Öte yandan, uzun süren susuzluk evreleri de köklerin kurumasına ve bitkinin gelişiminin tamamen sekteye uğramasına neden olur. Başarılı bir <strong>kavun karpuz sulama</strong> programının temel vizyonu, aktif kök bölgesindeki toprak nemini daima tarla kapasitesinin %60 ile %75 arasında dengede tutmaktır.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">2. Kavun ve Karpuz Sulama Takvimi: Kritik Büyüme Dönemleri</h2>
        <p>
          Kavun ve karpuzun yaşam döngüsü boyunca suya olan talebi statik değildir; bitki gelişim hızı ve biyolojik evrelerine göre farklı miktarlarda su talep eder. Sezon boyunca bitkilerin toplam su ihtiyacı iklim koşullarına, ekim/dikim tarihine ve toprak tipine bağlı olarak ortalama 450-650 mm net su düzeyindedir. İşte bitkinin evrelerine göre adım adım sulama takvimi:
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900 font-sans">A) Fide ve Tarlaya Kurulum Dönemi</h3>
        <p>
          Kavun ve karpuz yetiştiriciliğinde günümüzde genellikle hazır viyol fideleri kullanılmaktadır. Fidenin tarlaya dikimi (şaşırtılması) sırasında can suyu verilmesi en kritik ilk adımdır. Dikim yapılan gün fide başına yaklaşık 1-2 litre can suyu sızdırılmalıdır. <strong>Fide</strong> dikiminden sonraki ilk 7-10 günlük süreçte can suyu nemi takip edilir. Fidenin toprağa uyum sağlaması ve yabancı köklerin yeni toprağını sarabilmesi için hafif nemli bir ortam oluşturulur.
        </p>
        <p>
          Ancak fidelerin kök tuttuğundan emin olunduktan hemen sonra \"kök teşvik stresi\" adı verilen özel bir ziraat tekniği uygulanır. Bu teknikte fideler çiçeklenme döneminin başına kadar olabildiğince az sulanır. Buradaki temel bilimsel amaç, bitkiyi su aramaya zorlayarak kazık köklerini toprağın çok daha derin katmanlarına göndermesini sağlamaktır. Erken evrede aşırı ve sık sulanan bir kavun/karpuz fidesi tembelleşerek yüzeysel bir kök yapısı geliştirir; bu durum meyve büyütme döneminde bitkinin sıcağa karşı direncini tamamen kırar ve erken pörsümelere sebep olur.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900 font-sans">B) Kollanma ve Çiçeklenme Dönemi</h3>
        <p>
          Fidelerin tarlada sürgün vermeye (kollanmaya) başlamasıyla birlikte bitkinin büyüme hızı ivme kazanır. Sürgünlerin tarlayı sarmaya başladığı ve ilk sarı çiçeklerin görüldüğü bu dönemde toprak nemi yakından incelenmelidir. <strong>Çiçeklenme</strong> dönemi, kavun karpuz yetiştiriciliğindeki en hassas denge aşamasıdır.
        </p>
        <p>
          Çiçeklerin açmaya başladığı, dişi ve erkek çiçeklerin belirdiği çiçeklenme evresinde aşırı sulama yapmaktan kesinlikle kaçınılmalıdır. Bu dönemde yoğun su verilmesi, bitkinin vejetatif olarak aşırı coşmasına, yani meyve bağlamak yerine sürekli yaprak ve kol çıkarmasına sebep olur. Ayrıca aşırı sulama çiçek dökümlerini tavan yaptırır ve tozlaşmayı sağlayan arıların çiçeklere gitmesini engelleyen tarlada aşırı rutubetli bir mikroklima oluşturur. Tozlaşmanın sağlıklı gerçekleşmesi ve arıların tarlaya rahat gelmesi için çiçeklenme döneminde sulama aralıkları açılmalı, toprak hafif nemli ama kuru yüzeyli kalmalıdır.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900 font-sans">C) Meyve Bağlama ve Meyve Büyüme Dönemleri</h3>
        <p>
          Tozlaşmanın tamamlanıp küçük meyvelerin (ceviz veya yumurta büyüklüğünde) belirmesiyle birlikte sulama stratejisi tamamen değişir. İşte bu an, bitkinin suya en çok ihtiyaç duyduğu <strong>meyve büyüme dönemleri</strong> kapısının açıldığı andır. Meyveler bu boyutlara ulaştıktan sonra, bitkinin günlük su tüketim katsayısı (Kc) en üst düzey olan 1.05 - 1.15 seviyelerine fırlar.
        </p>
        <p>
          Meyvelerin hızla büyüdüğü, irileştiği bu evrede yapılacak herhangi bir su kısıtı veya gecikmesi meyvelerin küçük kalmasına, kavunlarda liflenmeye, karpuzlarda ise meyve uçlarında daralmalara ve şekil bozukluklarına sebep olur. Bu dönemde toprak nemi asla düşürülmemelidir; toprak yapısına gore 2 ila 3 günde bir düzenli sulama yapılmalıdır. Sulama rejimi oldukça düzenli ve pürüzsüz olmalıdır. Düzensiz sulamalar (yani toprağın çok kuruyup ardından ani ve aşırı sulanması) meyve kabuğunun iç turgor basıncına dayanamayarak tarlada boylamasına yarılmasına ve patlamasına sebep olur. Çatlamayan ve pürüzsüz kabuklu meyveler için su miktarı stabil tutulmalıdır.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900 font-sans">D) Olgunlaşma ve Hasat Öncesi Dönem</h3>
        <p>
          Meyveler kendilerine has nihai büyüklüğe ulaştıktan sonra dış kabuktaki desenler netleşir, karpuzlarda kulakçık ve sülük kurumaları başlar, kavunlarda ise mis kokulu aroma sentezlenmeye başlar. Bu evrede su tüketimi doğal olarak azalır. Meyvenin içindeki nişastanın şekere (glikoz ve fruktoza) dönüşebilmesi, yani meyvenin tatlanabilmesi için su miktarının kademeli olarak azaltılması şarttır.
        </p>
        <p>
          Hasat söküm tarihinden yaklaşık 10 - 15 gün önce sulama tamamen kesilmelidir. Bu süreçte sulamanın kesilmesi şu kritik faydaları sağlar:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Meyve Şeker Oranı (Brix):</strong> Suyun kesilmesiyle hücrelerdeki şeker konsantrasyonu artar, meyve gerçek tadını ve aromasını bulur. Son güne kadar sulanan karpuzlarda \"kabak lezzeti\" veya sulu ama tatsız bir iç oluşur.</li>
          <li><strong>Yüksek Nakliye Dayanımı:</strong> Hasat öncesi sulanmayan meyvelerin kabuk hücresel yapısı daha sıkılaşır ve sağlamlaşır. Bu durum, kavun ve karpuzun çürümeden, ezilmeden uzak mesafelerdeki pazarlara kamyonlarla taşınabilmesini sağlar.</li>
          <li><strong>Çatlama Kontrolü:</strong> Hasat döneminde tarladaki nem fazlalığı veya ani sulama, kavun ve karpuzların en hafif sarsıntıda çatlamasına yol açar. Gelişimi durdurmak için su kesilmelidir.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950 font-sans">3. Damla Sulama Sistemi Entegrasyonu Neden Zorunludur?</h2>
        <p>
          Kavun ve karpuz gibi sıra arası geniş (genellikle sıralar arası 1.5 - 2 metre, sıra üzeri 50-70 cm) bitkilerde geleneksel karık veya salma sulama teknikleri tam bir ziraat felaketidir. Bu sebeple modern ziraatte kesinlikle <strong>damla sulama</strong> teknolojisi bir standart olarak uygulanmaktadır.
        </p>
        <p>
          Neden kavun karpuz tarımında damla sulama tercih edilmelidir?
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Hastalık Önleme Gücü:</strong> Kabakgillerin yaprakları mantari patojenlere karşı aşırı hassastır. Yağmurlama veya karık sulama ile yaprakların ıslatılması, külleme (Erysiphe cichoracearum), yalancı mildiyö (Pseudoperonospora cubensis) ve antraknoz hastalıklarının tarlada kontrolsüzce yayılmasına zemin hazırlar. Damla sulamada sadece kök bölgesi sulandığından yapraklar kuru kalır, hastalık masrafları minimize olur.</li>
          <li><strong>Hassas Fertigasyon:</strong> Kavun ve karpuz gelişim boyunca yoğun fosfor, potasyum, kalsiyum ve azot tüketir. Sıvı gübrelerin doğrudan sulama suyuyla milimetrik olarak bitki köklerine iletilmesini sağlayan fertigasyon tekniği, gübre israfını %40 oranında engellerken meyve tonajını %50 büyütür.</li>
          <li><strong>Yüksek Su Tasarrufu:</strong> Geniş bitki koridorlarındaki boş toprakları ıslatmayarak suyun sadece bitki sırasına homojen dağılmasını sağlar, yabancı ot tohumlarının çimlenmesini önler. Su ve elektrik faturalarını yarı yarıya düşürür.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950 font-sans font-sans">4. Dönemsel Sulama Takvimi Karşılaştırma Tablosu</h2>
        <p>
          Kavun ve karpuz tarımı yapan üreticilerimizin sulama kararlarını en doğru şekilde verebilmeleri için ziraat normlarına uygun özet kılavuz tablomuz:
        </p>

        <div className="overflow-x-auto my-8 border-2 border-stone-100 rounded-2xl shadow-sm">
          <table className="min-w-full border-collapse bg-white">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Büyüme Dönemleri</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">İdeal Toprak Nemi Seviyesi</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Sulama Sıklığı / Tavsiyesi</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Su Miktar Hedefi (Sıra Genişliği Bazında)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Fide Kurulum Evresi</td>
                <td className="px-6 py-4 text-blue-600 font-bold">%70 - %75 Tarla Kapasitesi</td>
                <td className="px-6 py-4">Dikimde yoğun can suyu, ardından 7-10 gün hafif sulamalar.</td>
                <td className="px-6 py-4">Köklerin toprağa güvenle yapışmasını ve canlanmasını sağlar.</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Kollanma (Kök Teşvik Stresi)</td>
                <td className="px-6 py-4 text-amber-600">%55 - %60 Tarla Kapasitesi</td>
                <td className="px-6 py-4">Sulamalar olabildiğince azaltılır (Kökler derine teşvik edilir).</td>
                <td className="px-6 py-4">Kazık kök yapısını 1 metre derinliğe kadar uzatır, gövdeyi güçlendirir.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Çiçeklenme Başlangıcı</td>
                <td className="px-6 py-4 text-stone-600">%60 - %65 Tarla Kapasitesi</td>
                <td className="px-6 py-4">Aşırı sulamadan kaçınılır. Çiçek dökümü kontrol altında tutulur.</td>
                <td className="px-6 py-4">Tozlaşmayı ve arıların tarlaya sorunsuzca gelmesini destekler.</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Meyve Büyüme ve Şişme</td>
                <td className="px-6 py-4 text-red-600 font-bold">%70 - %75 Tarla Kapasitesi (Çok Kritik)</td>
                <td className="px-6 py-4">Toprak yapısına göre 2-3 günde bir kesintisiz, düzenli sulama.</td>
                <td className="px-6 py-4">Meyvelerin irileşmesini maksimize eder, iç boşalmasını ve kabuk çatlamasını önler.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Hasat Öncesi Dönem</td>
                <td className="px-6 py-4 text-red-700 font-bold">%0 - %30 (Sulama Tamamen Kesilir)</td>
                <td className="px-6 py-4">Hasattan 10-15 gün önce su tamamen kesilmelidir.</td>
                <td className="px-6 py-4">Meyvede brix (şeker) birikimini zirveye çıkarır, kabuk ve nakliye direncini artırır.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[var(--green-light)] p-8 rounded-[32px] my-10 border-2 border-[var(--green-mid)]/20 shadow-sm">
          <h4 className="text-xl font-black mb-4 text-[var(--green-dark)]">Uzman Ziraat Mühendisi Tavsiyeleri</h4>
          <p className="font-bold text-stone-700 leading-relaxed font-sans">
            Karpuz yetiştiriciliğinde aşırı veya dengesiz sulama meyvelerin \"iç boşalması\" (hollow heart) denilen fizyolojik bir bozukluğa yakalanmasına sebep olur. Aşırı azotlu gübreleme (özellikle üre gübresinin kontrolsüz verilmesi) ve düzensiz su rejimi bu boşluğu tetikler. Meyve bağlama aşamasından sonra kalsiyum bazlı fertigasyon desteği ve dengeli damla sulama ile meyve et bütünlüğünü kusursuz şekilde koruyabilirsiniz.
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950 font-sans font-sans">5. Toprak Nemi Ölçüm Yolları ve El ile Pratik Kontrol</h2>
        <p>
          Tarlanızda ziraat mühendisliği standartlarında bir <strong>kavun karpuz sulama</strong> planı yürütmek istiyorsanız, topraktaki nem düzeylerini düzenli izlemelisiniz:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Dijital Tansiyometreler:</strong> Fidelerin kök bölgesine (20 cm ve 40 cm derinliğe) yerleştirilen nem sensörleri, toprağın su emme direncini santibar (cb) olarak gösterir. Kavun ve karpuz için sapa kalkma ve meyve şişme dönemlerinde sensor değerlerinin 20-30 cb arasında tutulması istenir. Değerler 45-50 cb seviyesine yaklaştığında bitki acilen sulanmalıdır.</li>
          <li><strong>Tav Kontrolü (Toprak Sıkma Testi):</strong> Sensörleriniz yoksa, bitki sıra arasından 15-20 cm derinlikten bir avuç toprak çıkarın ve avucunuzla kuvvetlice sıkın. Toprak dağılmadan bir arada kalıyor ve elinize serinlik hissi veriyorsa nem oranı ideal tarla kapasitesindedir. Toprak serbest kaldığı an un ufak oluyor ve dağılıyorsa, bitkiler susuzluk sınırındadır; derhal damla sulama vanalarını açmanız gerekir.</li>
        </ul>

        <div className="bg-[var(--green-dark)] text-white p-10 rounded-[40px] my-10 shadow-lg border border-[var(--green-mid)]">
          <h4 className="text-2xl font-black mb-4 text-white">Tarla Koordinatlarınıza Özel Sulama Hesabı!</h4>
          <p className="font-bold text-white/90 font-sans">
            Tarlanızın toprak tipini, dikmiş olduğunuz kavun veya karpuz çeşidinin güncel vejetasyon evresini (fide, çiçeklenme, meyve şişme) ve bölgenizin anlık sıcaklık derecelerini sisteme girerek bugün vermeniz gereken hassas su miktarını m³ bazında hesaplamak ister misiniz? Hemen ana sayfamıza gidin, tamamen ücretsiz olan <strong>Akıllı Tarımsal Sulama Hesaplama Aracımızı</strong> kullanın, suyunuzu bilimsel yöneterek hasat kalitenizi garantileyin!
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950 font-sans font-sans">6. Sonuç ve Sürdürülebilir Tarım Projeksiyonu</h2>
        <p>
          2026 yılı tarımsal vizyonunda, temiz su kaynaklarımızın her zamankinden daha değerli hale geldiği aşikardır. Kavun ve karpuz gibi yüksek tonajlı, suya bağımlı meyve gruplarında kontrollü bir <strong>kavun karpuz sulama</strong> programı uygulamak hem ekolojik geleceğimizi korur hem de yüksek lezzet kalitesiyle alım tüccarlarının tarlanıza akın etmesini sağlar. Bilimsel metotlara sadık kalarak, doğru büyüme evrelerine uygun su yönetimiyle topraklarımızın bereketini sonsuz kılalım!
        </p>
      </div>
    )
  },
  "ege-bolgesi-sulama-takvimi-2026": {
    title: "Ege Bölgesi Sulama Takvimi 2026 — Akdeniz İkliminde Akıllı Su Yönetimi",
    date: "2 Haziran 2026",
    author: "Zir. Müh. Ahmet Kaya",
    readTime: "30 dk okuma",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2560&q=100",
    category: "Bölgesel Sulama",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium select-none">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic font-sans">
          Ege Bölgesi, uçsuz bucaksız verimli ovaları (Menderes, Gediz, Bakırçay), benzersiz mikroklima alanları ve binlerce yıllık tarım mirasıyla Türk tarımının en gözde merkezlerinden biridir. Zeytinden pamuğa, üzümden narenciyeye kadar yüksek değerli pek çok tarım ürünü bu topraklarda hayat bulur. Ancak değişen küresel iklim şartları, azalan baraj doluluk oranları ve su kaynaklarının korunması zorunluluğu, sulama yönetimini kritik bir bilim haline getirmiştir. 2026 sulama sezonunda, sürdürülebilir yüksek verim ve ideal mahsul kalitesi yakalamak için planlı bir <strong>Ege bölgesi sulama</strong> programı uygulamak hayati önem taşımaktadır. Bu rehberimizde; Ege'nin dinamik iklim şartlarını, kavurucu yaz dönemindeki sulama hassasiyetlerini ve bölgenin başat ürünlerine ait bitki bazlı sulama takvimlerini ziraat mühendisliği perspektfiyle ele alacağız.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">1. Ege Bölgesi'nin Coğrafi Yapısı ve Bölgeye Özel İklim Dinamikleri</h2>
        <p>
          Doğru bir <strong>Ege bölgesi sulama</strong> planlaması yapabilmek için öncelikle bölgenin morfolojik ve iklimsel haritası iyi analiz edilmelidir. Ege Bölgesi, dağların denize dik uzanması nedeniyle nemli deniz havasının iç kesimlere kadar sokulabildiği, geniş vadi tabanlarına ve zengin havzalara sahiptir. Ancak bu genel durum, bölge içinde belirgin mikroklima farklarının oluşmasını engellemez.
        </p>
        <p>
          Bölgeyi sulama planlaması açısından iki ana bölüme ayırmak mümkündür:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Kıyı Ege Şeridi (İzmir, Aydın, Muğla, Manisa'nın Batısı):</strong> Tipik Akdeniz ikliminin hüküm sürdüğü bu kuşakta yazlar aşırı sıcak ve kurak, kışlar ise ılıman ve yağışlı geçer. Yıllık evapotranspirasyon (toprak ve yapraktan su buharlaşması) oranları haziran ayından itibaren zirve yapar. Kumlu, tınlı ve mil içeren süzek ova toprakları suyu hızla tabana geçirirken, tuzluluk riskine karşı taban suyu kontrolü de gerektirir.</li>
          <li><strong>Geçit ve İç Ege Kuşağı (Afyonkarahisar, Uşak, Kütahya, Denizli):</strong> Karasallığın etkisinin başladığı bu geçiş bölgelerinde kışlar çok daha sert ve kar yağışlı, yazlar ise kıyıya kıyasla daha serin ve kısa sürer. İlkbahar sonu yağışları iç kesimlerde vejetasyon başlangıcını desteklese de, temmuz ve ağustos aylarında hava sıcaklıklarının yükselmesiyle ciddi sulama ihtiyacı doğar. Bu kuşağın toprak yapısı genellikle daha killi olup su tutma kapasitesi yüksektir, bu da sulama sıklığını azaltırken her sulamada verilecek su miktarının dikkatle hesaplanmasını gerektirir.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">2. Kritik Evre: Ege Ovalarında Kavurucu Yaz Sulaması Yönetimi</h2>
        <p>
          Haziran, temmuz ve ağustos ayları Ege’de su talebinin zirve yaptığı, akarsuların ve sulama kanallarının en yoğun kullanıldığı kritik dönemdir. Kuzeyden esen kuruluk veren imbat rüzgarları ve yüksek hava sıcaklıkları (yer yer 40°C ve üzeri), tarlanın nemini hızla yok eder. Bu zorlu yaz döneminde uygulanacak hatalı sulama rejimleri sadece su israfına değil, bitkilerde fizyolojik hastalıklara da davetiye çıkarır.
        </p>
        <p>
          Başarılı bir <strong>yaz sulaması</strong> için şu altın kurallara riayet edilmelidir:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Doğru Zamanlama:</strong> Sulamalar kesinlikle gün ortasında, güneş ışınlarının en dik geldiği 11:00 - 16:00 saatleri arasında yapılmamalıdır. Bu saatlerde toprağa verilen suyun büyük kısmı bitki köküne ulaşmadan buharlaşır; ayrıca damla sulama borularının içinde ısınan su kökleri haşlayarak çürütebilir. En ideal sulama zamanı gece yarısı ile sabahın ilk ışıkları (05:00 - 08:00) arasıdır.</li>
          <li><strong>Rüzgar Faktörü:</strong> Özellikle yağmurlama sulama sistemlerinde rüzgar hızı takip edilmelidir. Kuvvetli rüzgarda yapılan yağmurlama su dağılım homojenliğini bozar, bazı bölgeler susuz kalırken bazı bölgelerde göllenmeler oluşturur. Saatte 10-15 km'yi aşan rüzgarlarda sulama ertelenmelidir.</li>
          <li><strong>Aşırı Sulama ve Tuzlanma Tehlikesi:</strong> Menderes ve Gediz havzalarında yazın yapılan aşırı salma sulamalar, derinlerdeki tuz tabakasını kılcal hareketle yukarı çekerek toprak yüzeyinde tuzlanmaya sebep olur. Bu durum toprak verimliliğini uzun vadede tamamen öldürür. Yaz boyunca kontrollü ve sızdırma esaslı damla sulama tercih edilmelidir.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">3. Bitki Bazlı Sulama Tavsiyeleri ve Kritik Evreler</h2>
        <p>
          Ege Bölgesi'nin bitkisel çeşitliliği, her ürün grubuna özel hassas bir sulama takvimi uygulanmasını zorunlu kılar. İşte bölgenin önde gelen tarım ürünlerine özel <strong>bitki bazlı tavsiyeler</strong>:
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">A) Zeytin Ağaçlarında Sulama ve Yağ Randımanı</h3>
        <p>
          Zeytin (Olea europaea), kuraklığa en dayanıklı ağaçlardan biri olarak bilinse de modern ziraat göstermektedir ki, zeytinde dane verimini ve yağ oranını maksimize etmenin sırrı dengeli sulamada yatar. Kuru tarım yapılan zeytinliklerde periyodite (var yılı-yok yılı) farkı uçuruma ulaşırken, sulanan zeytinliklerde her yıl düzenli ve kaliteli ürün alınır.
        </p>
        <p>
          Zeytinde sulama takvimi üç kritik döneme odaklanır:
        </p>
        <ol className="list-decimal pl-8 space-y-2">
          <li><strong>Çiçeklenme ve Somak Oluşum Dönemi (Nisan-Mayıs):</strong> Çiçek taslaklarının belirdiği bu dönemde su stresi, çiçek dökümlerini artırır ve meyve tutum oranını düşürür. İlkbahar kurak gidiyorsa mutlaka hafif bir sulama yapılmalıdır.</li>
          <li><strong>Çekirdek Sertleşme Dönemi (Haziran-Temmuz):</strong> Meyvenin içindeki çekirdeğin sertleştiği bu evre zeytinin su isteğinin hızlandığı andır. Bu dönemdeki susuzluk meyvelerin küçük kalmasına, pörsümesine ve dökülmesine yol açar.</li>
          <li><strong>Yağ Sentezi ve Dane İrileşme Dönemi (Ağustos-Eylül):</strong> Meyve etindeki yağ sentezinin en yoğun olduğu dönemdir. Ağustos ortalarında yapılacak düzenli sulamalar, danelerin dolgun, pürüzsüz ve yağ randımanının yüksek olmasını sağlar. Hasat öncesi (ekim başında) asit oranını düşük tutmak ve taneleri korumak için sulama yavaşça azaltılarak kesilir.</li>
        </ol>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">B) Söke ve Menemen Ovalarının İncisi: Pamuk Sulama Stratejisi</h3>
        <p>
          Pamuk (Gossypium hirsutum), Ege Bölgesi'nin ekonomik can damarı olan \"beyaz altın\"dır. Pamuk yetiştiriciliğinde suyun miktarı kadar, bitkiye ne zaman uygulanacağı da lif kalitesini doğrudan şekillendirir.
        </p>
        <p>
          Pamuk sulama takviminde ilk sulama ziraat mühendisleri tarafından çok hassas planlanır. Ekimden sonra fide boyutunda erken ve sık sulama yapılması pamuğun vejetatif (gövde ve yaprak) olarak aşırı büyümesine, ancak daha az koza (elma) yapmasına sebep olur. Bu nedenle ilk sulama, bitkinin köklerini derinlere göndermesi için kısıt uygulanarak haziran ortasına kadar geciktirilir. Buna \"lavta sulaması\" denir.
        </p>
        <p>
          Çiçeklenme ve koza geliştirme evresine (Temmuz-Ağustos) girildiğinde ise pamuk suya doymak ister. Bu dönemde toprak nemi tarla kapasitesinin %65-70 seviyesinde tutulmalı, damla sulama yöntemiyle 4-5 günde bir sulama yapılmalıdır. Eylül ayında kozaların açılması ve liflerin kuruması için su miktarı azaltılmalı ve hasattan en az 25-30 gün önce sulama tamamen kesilmelidir. Zamanında kesilmeyen sulama lif kalitesini düşürür, kozaların çürümesine neden olur ve hasat makinelerinin tarlaya girmesini zorlaştırır.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">C) Ege Bağcılığı: Sultaniye Üzümünde Salkım ve Şeker Dengesi</h3>
        <p>
          Manisa, İzmir ve Denizli'de geniş alanları kaplayan bağcılıkta sulama, salkım uzunluğu ve dane büyüklüğünü belirleyen başat faktördür. Asmalar derin kök yapıları sayesinde kış yağışlarını derinlerde saklar. Ancak yazın yüksek sıcaklıklarında salkımların büzülmemesi için kontrollü sulama yapılmalıdır.
        </p>
        <p>
          Asmalarda çiçeklenme öncesi ve dane irileşme döneminde (mayıs-haziran) düzenli sulama yapılarak salkım yapısı güçlendirilir. Ancak üzümlere renk gelmeye başladığı ve dane içinin tatlandığı \"ben düşme\" evresine (temmuz ortası ve sonrası) girildiğinde sulama miktarı büyük ölçüde kısıtlanır. Bu dönemde aşırı sulama yapılması üzümdeki şeker (brix) oranını düşürerek sofralık ve kurutmalık kalitesini bozar, tanelerin çatlayarak mantar hastalıklarına yakalanmasına yol açar. Damla sulama boruları asma kök boğazından 30-40 cm uzağa çekilerek nemin geniş bir alana sızdırılması sağlanmalıdır.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">D) Narenciye Bahçelerinde Saçak Kök Nemi Kontrolü</h3>
        <p>
          Muğla ve İzmir kıyılarında yaygın olan mandalina, portakal ve limon ağaçları yüzeysel, saçak kök sistemine sahip olmaları nedeniyle toprağın kuru kalmasına tahammül edemezler. Narenciyede yazın yaşanacak ani susuzluk \"Haziran dökümü\" denilen küçük meyve dökümlerini tetikler.
        </p>
        <p>
          Yaz boyunca (Haziran-Eylül) narenciye bahçelerinde damla sulama sistemleri haftada 2 veya 3 gün periyotlarla çalıştırılmalıdır. Sonbahar aylarında ise meyvelerin kabuk kalitesini iyileştirmek, pürüzsüz ve parlak bir görünüm sağlamak için sulama sıklığı azaltılır ama tamamen kesilmez. Aşırı geç sonbahar sulaması ise kış soğuklarına karşı ağacın direncini kırarak dona karşı hassaslaştırır.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950">4. Modern Sulama Yöntemlerinin Ege Tarımına Entegrasyonu</h2>
        <p>
          Geleneksel vahşi sulama yöntemleri, Ege ovalarındaki verimli toprakların yapısını tahrip etmektedir. 2026 yılı tarım politikalarında su kısıtları göz önüne alındığında, modern sulama sistemlerine geçiş artık opsiyonel değil zorunludur:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Yüzey Altı Damla Sulama (SDI):</strong> Damla sulama borularının toprak altına, bitki kök hizasına gömülmesi yöntemidir. Bu sistem suyun doğrudan emici kök bölgesine iletilmesini sağlayarak yüzeydeki buharlaşma kaybını sıfıra indirir. Ege'nin sert pamuk ve mısır arazilerinde mükemmel sonuçlar verir.</li>
          <li><strong>Fertigasyon (Gübreli Sulama):</strong> Damla sulama hatlarına entegre edilen gübre tankları vasıtasıyla bitkilerin ihtiyaç duyduğu azot, potas ve fosfor gibi besin maddeleri sulama suyuyla birlikte eritilerek verilir. Bu yöntem bitkinin besin emilim hızını %90'ın üzerine çıkarırken gübre sarfiyatını %40 azaltır.</li>
          <li><strong>Toprak Nem Sensörleri (Akıllı Tarım):</strong> Tarlanın farklı noktalarına yerleştirilen tansiyometreler ve nem sensörleri, toprağın su gerilimini ölçerek cep telefonunuza anlık veri gönderir. Bu sayede ne zaman ve kaç saat sulama yapmanız gerektiğini bilimsel verilere dayanarak belirler, su israfını tamamen önlersiniz.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950 font-sans">5. Ege Bölgesi Ürün Bazlı Sulama Takvimi Özet Tablosu (2026)</h2>
        <p>
          Ege Bölgesi'ndeki üreticilerimizin sulama kararlarını planlarken başucu rehberi olarak kullanabilecekleri pratik referans tablosu:
        </p>

        <div className="overflow-x-auto my-8 border-2 border-stone-100 rounded-2xl shadow-sm">
          <table className="min-w-full border-collapse bg-white">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Ürün Grubu</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Kritik Gelişim Evresi</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Yaz Dönemi Sulama Sıklığı</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Yetersiz Sulamanın Zararları / Etkisi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Zeytin</td>
                <td className="px-6 py-4">Çekirdek Sertleşmesi / Yağ Oluşumu (Ağustos)</td>
                <td className="px-6 py-4">10 - 14 Günde Bir (Toprak tipine göre)</td>
                <td className="px-6 py-4">Meyvelerin büzüşmesi, zayıf yağ randımanı ve periyoditenin artması.</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Pamuk</td>
                <td className="px-6 py-4 text-blue-600 font-bold">Çiçeklenme Devresi / Koza Gelişimi (Temmuz-Ağustos)</td>
                <td className="px-6 py-4">4 - 6 Günde Bir (Damla sulamada)</td>
                <td className="px-6 py-4">Kozaların zamanından önce dökülmesi, lif uzunluğunun ve kalitesinin bozulması.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Bağ (Üzüm)</td>
                <td className="px-6 py-4">Salkım İrileşme ve Dane Şişme (Haziran-Temmuz başı)</td>
                <td className="px-6 py-4">7 - 10 Günde Bir (Ben düşmeye kadar)</td>
                <td className="px-6 py-4">Tanelerin küçük kalması, şeker oranının yapay şekilde aşırı yükselip rekolte kaybı.</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Narenciye</td>
                <td className="px-6 py-4 text-green-700">Çiçek Sonrası Meyve Tutumu (Haziran-Temmuz-Ağustos)</td>
                <td className="px-6 py-4">3 - 5 Günde Bir (Sık ve düzenli sızdırma)</td>
                <td className="px-6 py-4">Yoğun meyve dökülmesi, kabukta kalınlaşma ve meyve su oranının düşmesi.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Mısırlık & Yonca</td>
                <td className="px-6 py-4 text-red-700 font-bold">Koçan Oluşumu / Her Biçim Sonrası</td>
                <td className="px-6 py-4">5 - 7 Günde Bir (Gelişime göre)</td>
                <td className="px-6 py-4">Mısırda koçan dolduramama ve uç kuruluğu, yoncada bodur büyüme.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[var(--green-light)] p-8 rounded-[32px] my-10 border-2 border-[var(--green-mid)]/20 shadow-sm">
          <h4 className="text-xl font-black mb-4 text-[var(--green-dark)]">Tarla Notu: Toprak Düzenleyicilerin Nem Tutma Gücü</h4>
          <p className="font-bold text-stone-700 leading-relaxed font-sans">
            Ege kuraklıkları kapıdayken toprağın organik madde oranını artırmak, sulama maliyetlerinizi yarıya indirebilir. Toprağa sonbaharda uygulanacak iyi olgunlaşmış ahır gübresi veya humik-fulvik asit preparatları toprak gözeneklerini gevşeterek su tutma kapasitesini ciddi oranda artırır. Böylece sulama aralıklarınızı uzatabilir ve bitkinin köklerini daha uzun süre serin ve nemli tutabilirsiniz.
          </p>
        </div>

        <div className="bg-[var(--green-dark)] text-white p-10 rounded-[40px] my-10 shadow-lg border border-[var(--green-mid)]">
          <h4 className="text-2xl font-black mb-4 text-white">Ege Havzanıza Özel Sulama Miktarı Hesaplayın!</h4>
          <p className="font-bold text-white/90 font-sans">
            Tarlanızın bulunduğu Ege il ve ilçesini seçerek, yetiştirdiğiniz zeytin, pamuk veya bağ alanınızın toprak yapısına en uygun günlük su miktarını ve sulama süresini öğrenmek ister misiniz? Hemen ana sayfamıza gidin, tamamen ücretsiz olan <strong>Akıllı Tarımsal Sulama Hesaplama Aracımızı</strong> kullanın; suyunuzu bilimsel yöneterek hem doğayı koruyun hem de veriminizi zirveye taşıyın!
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-black text-stone-950 font-sans font-sans">6. Sonuç ve Bereketli Hasatlar Dileyişi</h2>
        <p>
          Ege Bölgesi'nin geleceği, tarımda atacağımız sürdürülebilir adımlara bağlıdır. Bilinçsizce açılan vahşi sulama vanaları havzalarımızın kurumasına yol açmaktadır. 2026 tarım yılında ziraat teknolojilerini tarlalarımıza adapte ederek, bitki bazlı sulama takvimlerine sadık kalmak ve sadece gerektiği kadar su takviyesi yapmak en büyük üretici sorumluluğumuzdur. Akılcı yöntemlerle, suyun her damlasını berekete dönüştürelim!
        </p>
      </div>
    )
  },
  "ic-anadolu-da-sulama-kuru-iklimde-su-tasarrufu-rehberi": {
    title: "İç Anadolu'da Sulama — Kuru İklimde Su Tasarrufu Rehberi",
    date: "3 Haziran 2026",
    author: "Zir. Müh. Ahmet Kaya",
    readTime: "35 dk okuma",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=2560&q=100",
    category: "Bölgesel Sulama",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium select-none">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic font-sans">
          İç Anadolu Bölgesi, geniş düzlükleri, sonsuz bozkırları ve derin tarım mirasıyla ülkemizin tahıl ambarı olarak kabul edilir. Ancak yıllık yağış miktarının 300-400 mm arasında sıkıştığı bu coğrafyada tarım yapmak, doğrudan iklim ve su kısıtlarıyla mücadele etmek demektir. Küresel ısınmanın etkilerini her geçen gün daha doğrudan hissettiğimiz 2026 yılında, sürdürülebilir ve verimli tarımsal üretim için planlı bir <strong>İç Anadolu sulama</strong> programı oluşturmak ulusal gıda arz güvenliğimiz için de vazgeçilmezdir. Bu kapsamlı rehberde, İç Anadolu'nun yarı kurak koşullarında su tasarrufu sağlayan yenilikçi tarım yöntemlerini, toprak nem kontrol mekanizmalarını ve bölgenin can damarı olan buğday ve arpa tarımı için bilimsel sulama tavsiyelerini ayrıntılarıyla inceleyeceğiz.
        </p>

        <h2 id="iklim-ve-toprak-yapisi" className="text-3xl mt-12 mb-6 font-black text-stone-950">1. İç Anadolu'nun İklim ve Toprak Karakteristiği ve Kuraklık Gerçeği</h2>
        <p>
          Bölgede egemen olan yarı kurak karasal iklim; kış aylarında sert soğukları ve kısmi kar yağışlarını beraberinde getirirken, yaz aylarında ise aşırı sıcaklık, düşük bağıl nem ve yüksek düzeyde buharlaşma (evapotranspirasyon) üretir. Bu durum, bitkilerin mevsim süresince ihtiyaç duyduğu su miktarının çok sınırlı bir kısmının doğal yağışlarla karşılanabildiği anlamına gelir. Konya Havzası başta olmak üzere bölgedeki birçok yeraltı su seviyesi (taban suyu) kontrolsüz çekimler nedeniyle her yıl metrelerce aşağı yönde çekilmektedir.
        </p>
        <p>
          Bu sebeple, geleneksel "vahşi sulama" veya sınırsız su kullanımı anlayışı artık tamamen sürdürülemez bir hal almıştır. İç Anadolu'da tarım yapan bir üretici için su yönetimi, her damlanın değerini bilerek hareket etmeyi gerektirir. Bölgenin toprak yapısı genellikle killi-tınlı veya kumlu-killi formdadır. Killi-tınlı topraklar su tutma kapasitelerinin yüksek olması nedeniyle avantajlı görünse de, yanlış sulandığında yüzeyde sert kaymak bağlama eğilimi gösterir. Bu morfolojik yapıya göre bir <strong>İç Anadolu sulama</strong> rejimi kurmak, toprağın nem durumunu dinamik olarak gözlemlemeyi mecbur kılar.
        </p>

        <h2 id="kuru-iklim-stratejileri" className="text-3xl mt-12 mb-6 font-black text-stone-950">2. Yarı Kurak İklimde Uygulanabilecek Akıllı Kuru İklim Stratejileri</h2>
        <p>
          Susuzluğu bir felaket olmaktan çıkarmak için ziraat teknolojilerinin sunduğu modern <strong>kuru iklim stratejileri</strong> sahada eksiksiz uygulanmalıdır:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Gece Sulaması Standartı:</strong> Gündüz saatlerinde İç Anadolu düzlüklerinde esen kuru sıcak rüzgarlar yardımıyla ve yüksek güneş radyasyonu nedeniyle, sulama suyunun %30 ila %40'ının bitki köklerine ulaşamadan havaya buharlaştığı gözlenir. Sulamanın akşam güneş battıktan sonra başlayıp sabah erken saatlere kadar (21:00 - 07:00) sürdürülmesi, evaporasyon kayıplarını minimuma indirerek muazzam bir su tasarrufu sağlar.</li>
          <li><strong>Koruyucu Toprak İşleme ve Doğrudan Ekim:</strong> Toprağı aşırı devirerek işlemek, toprak katmanlarında birikmiş olan kısıtlı nemin buharlaşarak kaybolmasına neden olur. Doğrudan ekim (anıza ekim) ve azaltılmış toprak işleme teknikleri, toprak yüzeyinde bir koruyucu örtü (mulç) vazifesi üstlenen bitki artıklarını muhafaza eder. Bu organik tabaka toprak sıcaklığını dengeler ve su kayıplarını azaltır.</li>
          <li><strong>Organik Madde Düzeyinin Yükseltilmesi:</strong> Toprağın su tutma kapasitesi organik madde düzeyiyle doğrudan ilişkilidir. Kompost, iyi olgunlaşmış ahır gübresi veya leonardit gibi organik toprak düzenleyicilerin kullanımı, toprak parçacıklarının kümelenmesini kolaylaştırarak su tutma süresini uzatır. Bu durum sulama aralıklarının açılmasını sağlar.</li>
          <li><strong>Buharlaşmayı Önleyici Rüzgar Perdeleri:</strong> Tarla sınırlarına rüzgar kırıcı ağaçların (örneğin iğde veya selvi) dikilmesi, tarlaya gelen sıcak hava akımlarını yavaşlatır. Bu sayede bitkilerin terleme (transpirasyon) yoluyla su kaybetme hızı gözle görülür şekilde yavaşlatılmış olur.</li>
        </ul>

        <h2 id="bugday-sulama-tavsiyeleri" className="text-3xl mt-12 mb-6 font-black text-stone-950">3. Buğday Sulama Tavsiyeleri ve En Hassas Büyüme Dönemleri</h2>
        <p>
          Buğday (Triticum aestivum), İç Anadolu'nun en yaygın ve ekonomik değeri yüksek ürünüdür. Genellikle kışlık olarak ekilen buğday, kış yağışları ve erken ilkbahar nemi ile vejetasyonunun erken safhalarını tamamlar. Ancak, yüksek rekolte ve ideale yakın ekmeklik un kalitesi elde etmek için kritik zamanlarda sulanması hayati önem taşır. Profesyonel <strong>buğday sulama</strong> programlarında şu evreler adım adım izlenmelidir:
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">A) Sapa Kalkma Evresi (Birinci Sulama)</h3>
        <p>
          Nisan sonu veya mayıs başlarında ilkbahar yağışlarının kesilmesiyle toprakta ani kuruma başlar. Tam bu esnada buğday sapa kalkma dönemine girer ve boğumlar oluşmaya başlar. Bu dönemde toprak neminin yetersiz olması bitkinin boyunun ve dolayısıyla sap veriminin düşük kalmasına, başak taslaklarının içerisindeki başakçık sayısının azalmasına yol açar. Eğer nisan-mayıs aylarında yeterli yağış düşmemişse, ilk sulama bu dönemde muhakkak yapılmalıdır.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">B) Başaklanma ve Çiçeklenme Dönemi (İkinci ve En Kritik Sulama)</h3>
        <p>
          Mayıs sonu veya haziran başında buğdayın başakları kından bütünüyle çıkarak çiçeklenme evresi açılır. Bir buğday tarlasının suya en hassas olduğu, su tüketiminin pik yaptığı dönem burasıdır. Bu evrede bitkinin nemsiz kalması döl tutma oranını bozar, kısırlığı tetikler ve başak ucundaki danelerin oluşmasını engeller. Bu yüzden, sapa kalkmadan sonraki ikinci sulama çiçeklenme başlangıcı ya da başakların görünmesiyle beraber dekar başına ideal hacimlerde tatbik edilmelidir.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900">C) Süt ve Sarı Olum Dönemi (Üçüncü Sulama - Dane Dolumu)</h3>
        <p>
          Çiçeklenme sonrası oluşan tanelerin içerisine nişasta dolumu gerçekleşmeye başlar. Süt olum döneminde bitkinin susuz kalması durumunda taneler cılız kalır, buruşur ve "hektolitre ağırlığı" denilen kalite kriteri yerle bir olur. Bu dönemde verilecek hafif bir sulama taneleri dolgunlaştırır, un randımanını artırır. Ancak sarı olum evresine ulaşıldığında sulama tamamen sonlandırılmalıdır. Hasat öncesi geç sulama yapmak buğdayda yatmaya, tane dökülmesine, pas hastalıklarına ve tanelerin kararmasına (kara leke hastalığı) sebebiyet verebilir.
        </p>

        <h2 id="arpa-sulama-tavsiyeleri" className="text-3xl mt-12 mb-6 font-black text-stone-950">4. Arpa Sulama Tavsiyeleri: Kritik Evreler ve Maltlık-Yemlik Dengesi</h2>
        <p>
          Arpa (Hordeum vulgare), buğdaya göre daha kısa bir yetişme süresine sahiptir ve kuraklığa nispeten daha dayanıklıdır. Fakat yüksek verim (dekar başına 600-800 kg) elde etmek için arpa sulamasının da bilimsel takvime bağlanması şarttır. <strong>Arpa sulama</strong> sürecinde şu noktalara azami dikkat gösterilmelidir:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Kardeşlenme Dönemi Nemi:</strong> Arpanın kardeşlenme döneminde (erken ilkbahar) toprak neminin yerinde olması, bir kökten çıkacak başak taşıyıcı kardeş adedini belirler. Kurak geçen kışlardan sonra erken ilkbaharda yapılacak hafif bir sulama, tarladaki kardeş yoğunluğunu doğrudan yukarı taşır.</li>
          <li><strong>Sapa Kalkma ve Karınlanma Dönemi:</strong> Başak taslaklarının geliştiği sapa kalkma döneminde arpanın su stresi yaşamaması gerekir. Bu dönemde verilecek su miktarı sap dayanıklılığını yapıcı yönde destekler.</li>
          <li><strong>Başaklanma ve Çiçeklenme Dönemi:</strong> Tıpkı buğdayda olduğu gibi arpanın da suya en hassas olduğu ana evredir. Kurak bölgelerde bu dönemde mutlaka sulama sağlanarak tane tutumu garanti altına alınmalıdır.</li>
        </ul>

        <div className="bg-[var(--green-light)] p-8 rounded-[32px] my-10 border-2 border-[var(--green-mid)]/20 shadow-sm font-sans">
          <h4 className="text-xl font-black mb-4 text-[var(--green-dark)] font-sans">Sanayi ve Yemlik Üretiminde Sulama Farkı</h4>
          <p className="font-bold text-stone-700 leading-relaxed">
            Eğer bira sanayisi için maltlık arpa yetiştiriyorsanız, tanenin protein oranının %9 ila %11,5 arasında kalması, nişasta oranının ise yüksek olması istenir. Bunu yakalamak için başaklanma ve tane dolum süreçlerinde bitkiyi nemsiz bırakmamak, düzenli ve kontrollü sulama yapmak gerekir. Düzenli su, proteini seyrelterek maltlık kalitesini artırır. Tam aksine, yemlik arpa üretiyorsanız yüksek protein istendiğinden, başaklanma sonrasındaki kısıtlı su uygulamaları protein konsantrasyonunu artırabilir ancak tonaj verimini bir miktar düşürecektir.
          </p>
        </div>

        <h2 id="tasarruflu-sulama-teknolojileri" className="text-3xl mt-12 mb-6 font-black text-stone-950">5. Kuru İklimde Modern Sulama Teknolojileri ve Su Tasarrufu</h2>
        <p>
          İç Anadolu'da su kaynaklarının kısıtlılığı, tarlaya taşınan suyun en verimli şekilde dağıtılmasını zorunlu kılar. Bölgede vahşi sulama yöntemlerinden karık ve salma sulamalar tamamen dışlanmalı, yerine şu modern sistemler ikame edilmelidir:
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900 font-sans">A) Yağmurlama (Sprinkler) Sulama Sistemleri</h3>
        <p>
          Buğday ve arpa gibi ekim yoğunluğunun çok yüksek olduğu tarla bitkilerinde yağmurlama sulama oldukça elverişlidir. Su, damlacıklar halinde püskürtülerek araziye homojen bir biçimde yayılır. Ancak rüzgarlı günlerde evaporasyon kaybı fazla olduğundan, rüzgar hızının azaldığı gece saatlerinde işletilmesi tasarruf oranını %30'a kadar çıkartır. Yağmurlama memelerinin (başlıklarının) aşınmamış olması ve doğru çalışma basıncında (3-4 bar) tutulması, suyun tarlaya ideal boyutta ulaşması açısından önemlidir.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900 font-sans">B) Otomatik Pivot (Center Pivot) Sulama Teknolojisi</h3>
        <p>
          İç Anadolu'nun geniş mülkiyet sınırlarına sahip büyük tarımsal işletmelerinde Center Pivot (dairesel hareketli sulama makineleri) sistemleri en yüksek su verimliliğini sunar. Kendi ekseni etrafında dönerek tarlayı otomatik bir biçimde sulayan bu devasa sistemler, işçilik ihtiyacını sıfıra indirirken su dağılım eşbiçimliliğini %95'in üzerine çıkarır. Akıllı kontrol panelleri sayesinde günün istenen saatinde, istenen milimetrede hassas sulama olanağı sağlar.
        </p>

        <h3 className="text-2xl mt-8 mb-4 font-black text-stone-900 font-sans">C) Yüzey Altı Damla Sulama</h3>
        <p>
          Yeni nesil ziraat uygulamalarında, yem bitkilerinde (yonca vs.) ve bazı hububat arazilerinde damla sulama borularının toprak altına, pulluk derinliğinin altına gömülmesi yöntemi yaygınlaşmaktadır. Bu sistemde toprak yüzeyinde hiçbir ıslaklık oluşmadığından buharlaşma kaybı sıfıra yaklaşır, yabancı ot gelişimi engellenir ve doğrudan kök bölgesine bitki besin maddeleri milimetrik olarak sevk edilebilir. Gübre tasarrufu da bu yolla en üst düzeye ulaşır.
        </p>

        <h2 id="sulama-takvimi-tablosu" className="text-3xl mt-12 mb-6 font-black text-stone-950 font-sans font-sans">6. İç Anadolu Hububat Sulama Karşılaştırma Tablosu</h2>
        <p>
          Bölge çiftçilerimizin sahada en hızlı sulama kararlarını alabilmesi için hazırladığımız karşılaştırmalı takvim tablosu:
        </p>

        <div className="overflow-x-auto my-8 border-2 border-stone-100 rounded-2xl shadow-sm">
          <table className="min-w-full border-collapse bg-white">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Bitki Grubu</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">En Kritik Sulama Dönemi</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Tasarruflu Sulama Yöntemi</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Dekara Hedeflenen Su Hacmi</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-600 uppercase tracking-wider">Yetersiz Sulamadaki Riskler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Buğday</td>
                <td className="px-6 py-4 text-red-600 font-bold">Çiçeklenme & Başaklanma Evresi</td>
                <td className="px-6 py-4">Otomatik Pivot veya Gece Yağmurlaması</td>
                <td className="px-6 py-4">60 - 75 m³</td>
                <td className="px-6 py-4">Başaklarda tane kısırlığı, hektolitre düşüşü ve un kalitesinin bozulması.</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Arpa (Maltlık)</td>
                <td className="px-6 py-4 text-blue-600 font-bold">Başaklanma ve Tane Doldurma</td>
                <td className="px-6 py-4">Düşük Basınçlı Yağmurlama (Gece)</td>
                <td className="px-6 py-4">55 - 65 m³</td>
                <td className="px-6 py-4">Tane protein oranının bira sanayii için aşırı yükselmesi ve cılızlık.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Arpa (Yemlik)</td>
                <td className="px-6 py-4">Sapa Kalkma & Erken Başaklanma</td>
                <td className="px-6 py-4">Standart Sprinkler Hattı</td>
                <td className="px-6 py-4">50 - 60 m³</td>
                <td className="px-6 py-4">Kardeş sayısının azalması, tane saman verimi toplamında rekolte kaybı.</td>
              </tr>
              <tr className="bg-stone-50/55">
                <td className="px-6 py-4 font-bold text-stone-900">Şeker Pancarı</td>
                <td className="px-6 py-4">Kök İrileşme ve Yumru Gelişim Dönemi</td>
                <td className="px-6 py-4">Damla Sulama (Hassas Hatlar)</td>
                <td className="px-6 py-4">80 - 100 m³</td>
                <td className="px-6 py-4">Kök şeker polaritesinin düşmesi, yapraklarda solma ve verim kaybı.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-stone-900">Yonca (Yem)</td>
                <td className="px-6 py-4">Her Biçimden 3-5 Gün Sonra (Can Suyu)</td>
                <td className="px-6 py-4">Yüzey Altı Damla Sulama (SDI)</td>
                <td className="px-6 py-4">65 - 75 m³</td>
                <td className="px-6 py-4">Biçim aralarının uzaması, yeşil ot tonajının azalması ve lif sertliği.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[var(--green-dark)] text-white p-10 rounded-[40px] my-10 shadow-lg border border-[var(--green-mid)] font-sans">
          <h4 className="text-2xl font-black mb-4 text-white font-sans">İç Anadolu Tarım Araziniz İçin Hassas Su Hesabı!</h4>
          <p className="font-bold text-white/90">
            Tarlanızın bulunduğu İç Anadolu il ve ilçesini, arpa veya buğday çeşidinizin ekim tarihini ve güncel gelişim evresini seçerek bu hafta vermeniz gereken milimetrik su ihtiyacını hesaplamak ister misiniz? Hemen ana sayfamıza gidin, tamamen ücretsiz kullanabileceğiniz <strong>Akıllı Tarımsal Sulama Hesaplama Aracımızı</strong> çalıştırın, suyunuzu bilimle yöneterek tasarruf edin ve yüksek verimi garantiyi altına alın!
          </p>
        </div>

        <h2 id="sonuc" className="text-3xl mt-12 mb-6 font-black text-stone-950 font-sans font-sans">7. Sonuç ve Geleceğe Yönelik Sürdürülebilirlik Vizyonu</h2>
        <p>
          İç Anadolu Bölgesi'nde kuraklık geçici bir mevsim olayı değil, kalıcı bir coğrafi gerçektir. 2026 yılı tarım vizyonunun özü, kısıtlı kaynakları en yüksek verimle yönetmekten geçer. Doğru gelişim dönemlerini takip ederek, gece sulamalarını hayata geçirerek, toprak işleme yöntemlerimizi koruyucu tarıma uyarlayarak ve modern sulama altyapısına geçiş yaparak sularımızın her damlasını altın değerinde koruyabiliriz. Unutmayalım ki, tarlada akıtılacak her bilinçli damla su, ülkemizin yarınki gıda güvenliğine verilmiş en büyük güvencedir. Akıllı ziraat metodolojilerini tarlanıza taşıyarak, toprağınızı koruyun ve mahsulünüzü zenginleştirin!
        </p>
      </div>
    )
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? postsData[slug] : null;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = FALLBACK_IMAGE;
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Yazı Bulunamadı</h1>
          <Link to="/blog" className="text-[var(--green-mid)] font-bold hover:underline">Blog'a Geri Dön</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{post.title} | Tarım Sulama Blog</title>
        <meta name="description" content={post.title} />
      </Helmet>

      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title} 
            onError={handleImageError}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 pb-20 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 font-bold text-sm bg-white/10 backdrop-blur-md px-4 py-2 rounded-full transition-all">
            <ChevronLeft className="h-4 w-4" /> Yazı Listesi
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-[var(--green-mid)] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">{post.category}</span>
            <div className="flex items-center gap-2 text-white/80 text-sm font-bold">
              <Clock className="h-4 w-4" /> {post.readTime}
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Sidebar info */}
            <aside className="md:w-1/4 order-2 md:order-1">
              <div className="sticky top-32 space-y-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center shrink-0">
                    <User className="h-6 w-6 text-stone-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Yazar</p>
                    <p className="font-black text-stone-800">{post.author}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Calendar className="h-6 w-6 text-stone-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Tarih</p>
                    <p className="font-black text-stone-800">{post.date}</p>
                  </div>
                </div>
                <div className="pt-8 border-t">
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Paylaş</p>
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center hover:bg-[var(--green-mid)] hover:text-white transition-all cursor-pointer">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center hover:bg-[var(--green-mid)] hover:text-white transition-all cursor-pointer">
                      <Tag className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Article */}
            <article className="md:w-3/4 order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="content-area"
              >
                {post.content}
              </motion.div>

              {/* Call to Action */}
              <div className="mt-24 p-10 bg-[var(--green-dark)] rounded-[40px] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:rotate-0 transition-transform">
                  <BookOpen className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-4">Su Tasarrufuna Bugün Başlayın</h3>
                  <p className="text-white/70 font-bold mb-8 max-w-lg leading-relaxed">
                    Bitkinizin türüne, bulunduğunuz konuma ve güncel hava durumuna göre saniyeler içinde bilimsel sulama planınızı oluşturun.
                  </p>
                  <Link to="/">
                    <button className="bg-[var(--green-mid)] text-white px-8 py-4 rounded-2xl font-black hover:bg-white hover:text-[var(--green-dark)] transition-all shadow-xl">
                      Hesaplama Aracına Git
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
