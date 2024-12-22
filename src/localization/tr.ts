import { Language } from './type';

const turkish: Language = {
    global: {},
    status: {
        connecting: 'Bağlanıyor ...',
        connected: 'Bağlandı',
        connected_confirm: 'Bağlandı',
        disconnecting: 'Bağlantı kesiliyor ...',
        disconnected: 'Bağlantı kesildi',
        ip_check: 'IP kontrol ediliyor ...',
        keep_trying: 'Tekrar denemek için lütfen bir süre bekleyin...'
    },
    home: {
        title_warp_based: 'Warp Tabanlı',
        drawer_settings_warp: 'Warp Ayarları',
        drawer_settings_routing_rules: 'Yönlendirme Kuralları',
        drawer_settings_app: 'Uygulama Ayarları',
        drawer_settings_scanner: 'Tarayıcı Ayarları',
        drawer_settings_network: 'Ağ Ayarları',
        drawer_log: 'Uygulama Günlüğü',
        drawer_update: 'Güncelleme',
        drawer_update_label: 'Yeni Güncelleme',
        drawer_speed_test: 'Hız Testi',
        drawer_about: 'Uygulama Hakkında',
        drawer_lang: 'Dil Değişikliği',
        drawer_singbox: 'Tünel Ayarlar'
    },
    toast: {
        ip_check_please_wait: 'Lütfen kontrolü yeniden denemek için birkaç saniye bekleyin!',
        ir_location:
            'Cloudflare, gerçek IP\'nizden farklı olan İran konumlu bir IP\'ye bağlandı. Bunu filtrelemeyi aşmak için kullanabilirsiniz, ancak yaptırımlar için değil. Endişelenmeyin! Ayarlar bölümünde "Gool" veya "Psiphon" seçeneğini kullanarak konumu değiştirebilirsiniz.',
        btn_submit: 'Anladım',
        copied: 'Kopyalandı!',
        cleared: 'Günlük temizlendi!',
        please_wait: 'Lütfen Bekleyin ...',
        offline: 'Çevrimdışısınız!',
        settings_changed: 'Ayarları uygulamak için yeniden bağlanma gerekiyor.',
        hardware_usage:
            'Bu seçeneği etkinleştirmek donanım kaynaklarının kullanımını artıracaktır.',
        config_added:
            'Yapılandırma başarıyla eklendi ve kullanmak için bağlantıya tıklamanız gerekiyor.',
        profile_added: 'Uç nokta başarıyla profile eklendi.'
    },
    settings: {
        title: 'Warp Ayarları',
        more: 'Diğer Ayarlar',
        method_warp: 'Warp',
        method_warp_desc: "Warp'ı etkinleştir",
        method_gool: 'Gool',
        method_gool_desc: "WarpInWarp'ı etkinleştir",
        method_psiphon: 'Psiphon',
        method_psiphon_desc: "Psiphon'u etkinleştir",
        method_psiphon_location: 'Ülke',
        method_psiphon_location_auto: 'rastgele',
        method_psiphon_location_desc: "İstenen ülke IP'sini seçin",
        endpoint: 'Endpoint',
        endpoint_desc: 'IP veya alan adı kombinasyonu, port ile birlikte',
        license: 'Lisans',
        license_desc: 'Lisans tüketimi iki katına çıkar',
        option: 'Uygulama Ayarları',
        network: 'Ağ Ayarları',
        proxy_mode: 'Yapılandırma',
        proxy_mode_desc: 'Proxy Ayarlarını Tanımla',
        port: 'Proxy Portu',
        port_desc: 'Uygulama proxy portunu tanımlayın',
        share_vpn: 'Paylaş (LAN)',
        share_vpn_desc: 'Ağda proxy paylaşımı',
        dns: 'DNS',
        dns_desc: 'Reklamları ve yetişkin içeriklerini engelle',
        dns_error: 'Warp ve Gool yöntemlerine uygulanabilir',
        ip_data: 'IP Kontrolü',
        ip_data_desc: 'Bağlantı sonrası IP ve konumu göster',
        data_usage: 'Veri Kullanımı',
        data_usage_desc: 'Veri kullanımını ve gerçek zamanlı hızı göster',
        dark_mode: 'Karanlık Mod',
        dark_mode_desc: 'Uygulamanın görüntüleme modunu belirtin',
        lang: 'Dil',
        lang_desc: 'Uygulama arayüzü dilini değiştir',
        open_login: 'Girişte Başlat',
        open_login_desc: 'Sistem başlangıcında aç',
        auto_connect: 'Otomatik Bağlantı',
        auto_connect_desc: 'Uygulama açıldığında bağlan',
        system_tray: 'Sistem Tepsisi',
        system_tray_desc: 'Görev çubuğunda program simgesi yerleştirme',
        force_close: 'Zorla Kapat',
        force_close_desc: 'Çıkışta sistem tepsisinde kalma',
        shortcut: 'Kısayol',
        shortcut_desc: 'Ana sayfadaki kısayollar',
        restore: 'Geri Yükle',
        restore_desc: 'Varsayılan uygulama ayarlarını uygula',
        scanner: 'Tarayıcı Ayarları',
        scanner_alert: 'Varsayılan endpoint adresini kullanıyorsanız tarayıcı etkinleştirilir.',
        scanner_ip_type: 'Endpoint türü',
        scanner_ip_type_auto: 'Otomatik',
        scanner_ip_type_desc: "Endpoint IP'si bulmak için",
        scanner_rtt: 'Aralık',
        scanner_rtt_default: 'Varsayılan',
        scanner_rtt_desc: 'Tarayıcı RTT sınırı',
        scanner_reserved: 'Rezerve',
        scanner_reserved_desc: 'Wireguard rezerve değerini geçersiz kıl',
        routing_rules: 'Kara Liste',
        routing_rules_desc: 'Trafiğin warp üzerinden geçmesini engelle',
        routing_rules_disabled: 'Devre Dışı',
        routing_rules_items: 'Öğeler',
        profile: 'Profil',
        profile_desc: "Tarafınızdan kaydedilen endpoint'ler",
        singbox: 'Singbox Ayarları',
        close_singbox: 'İşlemi durdur',
        close_singbox_desc: "Bağlantı kesildiğinde sing-box'ı otomatik olarak kapat",
        close_helper: 'Yardımcıyı durdur',
        close_helper_desc: 'Çıkışta yardımcıyı otomatik olarak kapat',
        mtu: 'MTU Değeri',
        mtu_desc: 'Maksimum İletim Birimini Ayarla',
        geo_block: 'Engelleme',
        geo_block_desc: 'Reklamlar, kötü amaçlı yazılımlar, kimlik avı ve kripto madencileri',
        geo_rules_ip: 'IP Yönlendirme',
        geo_rules_ip_desc: 'GeoIP kurallarını uygulama',
        geo_rules_site: 'Web Yönlendirme',
        geo_rules_site_desc: 'GeoSite kurallarını uygulama',
        more_helper: 'Yardımcı Ayarları',
        singbox_log: 'Kayıt',
        singbox_log_desc: 'Kayıt Seviyesi Ayarla',
        singbox_stack: 'Yığın',
        singbox_stack_desc: 'Yığın Tipini Ayarla',
        singbox_strict_route: 'Sıkı Yönlendirme',
        singbox_strict_route_desc: 'Sıkı Yolu Etkinleştir',
        singbox_sniff: 'Dinleme',
        singbox_sniff_desc: 'Dinlemeyi Etkinleştir',
        singbox_sniff_override: 'Hedefi Geçersiz Kıl',
        singbox_sniff_override_desc: 'Sniff hedefi geçersiz kılmayı etkinleştir',
        singbox_udp_direct: 'Doğrudan UDP',
        singbox_udp_direct_desc: "Doğrudan UDP'yi Etkinleştir"
    },
    tabs: {
        home: 'Bağlan',
        warp: 'Warp',
        network: 'Ağ',
        scanner: 'Tarayıcı',
        app: 'Uygulama',
        singbox: 'Singbox'
    },
    modal: {
        endpoint_title: 'Endpoint',
        license_title: 'Lisans',
        license_desc:
            'Program çalışması için Warp lisansı gerektirmez, ancak isterseniz lisansınızı buraya girebilirsiniz.',
        license_clear: 'Temizle',
        port_title: 'Proxy Portu',
        restore_title: 'Değişiklikleri Geri Yükle',
        restore_desc:
            'Değişiklikleri geri yükleme işlemini onaylayarak, tüm program ayarları varsayılan duruma döner ve bağlantınız kesilir.',
        routing_rules_sample: 'Örnek',
        routing_rules_alert_tun:
            'Yalnızca etki alanı, ip ve uygulama için yönlendirme kuralları Tun yapılandırmasını etkileyecektir.',
        routing_rules_alert_system:
            'Uygulama yönlendirme kuralı dışında, diğer kurallar Sistem Proxy yapılandırmasını etkileyecektir.',
        endpoint_default: 'Varsayılan',
        endpoint_suggested: 'Önerilen',
        endpoint_latest: 'En Son',
        endpoint_update: "Önerilen endpoint'leri al",
        endpoint_paste: 'Aktif endpoint yapıştır',
        profile_title: 'Profil',
        profile_name: 'Başlık',
        profile_endpoint: 'Endpoint',
        profile_limitation: (value) => `En fazla ${value} endpoint ekleyebilirsiniz.`,
        mtu_title: 'MTU Değeri',
        mtu_desc:
            'Maksimum İletim Birimi (MTU), veri paketlerinin maksimum boyutunu ifade eder ve 1000 ile 9999 arasında ayarlanmalıdır.',
        confirm: 'Onaylıyorum',
        update: 'Güncelle',
        cancel: 'İptal'
    },
    log: {
        title: 'Uygulama Günlüğü',
        desc: 'Program tarafından oluşturulan bir günlük varsa, burada gösterilecektir.',
        error_invalid_license: 'Girilen lisans geçerli değil; Kaldırın.',
        error_too_many_connected: 'Lisans kullanım sınırı doldu; Kaldırın.',
        error_access_denied: 'Programı Yönetici Olarak Çalıştırın.',
        error_failed_set_endpoint:
            'Endpoint değerini kontrol edin veya değiştirin, ardından tekrar deneyin.',
        error_warp_identity: 'Cloudflare kimlik doğrulama hatası; Tekrar deneyin.',
        error_script_failed: 'Program bir hata ile karşılaştı; Tekrar deneyin.',
        error_object_null: 'Program bir hata ile karşılaştı; Tekrar deneyin.',
        error_port_already_in_use: (value) =>
            `Port ${value} başka bir program tarafından kullanılıyor; Değiştirin.`,
        error_port_socket: 'Başka bir port kullanın.',
        error_port_restart: 'Port kullanılıyor; yeniden başlatılıyor ...',
        error_unknown_flag: 'Arka planda geçersiz bir komut yürütüldü.',
        error_deadline_exceeded: 'Bağlantı zaman aşımına uğradı; Tekrar deneyin.',
        error_configuration_encountered: 'Proxy yapılandırması hatası ile karşılaşıldı!',
        error_desktop_not_supported: 'Masaüstü ortamı desteklenmiyor!',
        error_configuration_not_supported:
            'Proxy yapılandırması işletim sisteminizde desteklenmiyor, ancak manuel olarak Warp Proxy kullanabilirsiniz.',
        error_configuring_proxy: (value) => `${value} için proxy yapılandırılırken hata oluştu!`,
        error_wp_not_found: 'Warp-plus dosyası uygulama paketiyle birlikte yer almıyor!',
        error_wp_stopped: 'warp-plus dosyası çalışırken bir sorunla karşılaştı!',
        error_connection_failed: '1.1.1.1 ile bağlantı sağlanamadı.',
        error_country_failed: 'Seçilen ülkeye bağlanılamıyor.',
        error_singbox_failed_stop: 'Sing-Box durdurulamadı!',
        error_singbox_failed_start: 'Sing-Box başlatılamadı!',
        error_wp_reset_peer: 'Cloudflare bağlantısı beklenmedik bir şekilde kesildi!',
        error_failed_connection: 'Bağlantı kurulamadı!',
        error_canceled_by_user: 'İşlem kullanıcı tarafından iptal edildi.'
    },
    about: {
        title: 'Uygulama Hakkında',
        desc: 'Bu program, Windows, Linux ve Mac için Oblivion uygulamasının gayri resmi, ancak güvenilir bir sürümüdür.\nOblivion Masaüstü programı, orijinal sürümün kullanıcı arayüzünü modelleyen Yousef Ghobadi tarafından geliştirilmiştir. Ücretsiz internet erişimi sağlamak amacıyla yazılmıştır ve isim değişikliği veya ticari kullanımına izin verilmez.',
        slogan: 'İnternet, ya herkes için ya da hiç kimse için!'
    },
    systemTray: {
        connect: 'Bağlan',
        connecting: 'Bağlanıyor ...',
        connected: 'Bağlandı',
        disconnecting: 'Bağlantı kesiliyor ...',
        settings: 'Ayarlar',
        settings_warp: 'Warp',
        settings_network: 'Ağ',
        settings_scanner: 'Tarayıcı',
        settings_app: 'Uygulama',
        about: 'Hakkında',
        log: 'Günlük',
        speed_test: 'Hız testi',
        exit: 'Çıkış'
    },
    update: {
        available: 'Güncelleme Mevcut',
        available_message: (value) =>
            `Yeni bir ${value} sürümü mevcut. Şimdi güncellemek ister misiniz?`,
        ready: 'Güncelleme Hazır',
        ready_message: (value) =>
            `Yeni bir ${value} sürümü hazır. Yeniden başlatma sonrası yüklenecek. Şimdi yeniden başlatmak ister misiniz?`
    },
    speedTest: {
        title: 'Hız Testi',
        initializing: 'Hız testi başlatılıyor ...',
        click_start: 'Hız testini başlatmak için düğmeye tıklayın',
        error_msg: 'Hız testi sırasında bir hata oluştu. Lütfen tekrar deneyin.',
        server_unavailable: 'Hız testi sunucusu mevcut değil',
        download_speed: 'İndirme Hızı',
        upload_speed: 'Yükleme Hızı',
        latency: 'Gecikme',
        jitter: 'Jitter'
    }
};
export default turkish;
