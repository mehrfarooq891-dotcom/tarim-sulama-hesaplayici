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
