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
