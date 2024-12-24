import { Language } from './type';

const arabic: Language = {
    global: {},
    status: {
        connecting: 'جارٍ الاتصال ...',
        connected: 'متصل',
        connected_confirm: 'تم الاتصال',
        disconnecting: 'جارٍ قطع الاتصال ...',
        disconnected: 'تم قطع الاتصال',
        ip_check: 'جارٍ فحص الـ IP ...',
        keep_trying: 'يرجى الانتظار قليلاً لإعادة المحاولة...'
    },
    home: {
        title_warp_based: 'مبني على Warp',
        drawer_settings_warp: 'إعدادات Warp',
        drawer_settings_routing_rules: 'قواعد التوجيه',
        drawer_settings_app: 'إعدادات التطبيق',
        drawer_settings_scanner: 'إعدادات الماسح الضوئي',
        drawer_settings_network: 'إعدادات الشبكة',
        drawer_log: 'سجل التطبيق',
        drawer_update: 'تحديث',
        drawer_update_label: 'تحديث جديد',
        drawer_speed_test: 'اختبار السرعة',
        drawer_about: 'حول التطبيق',
        drawer_lang: 'تغيير اللغة',
        drawer_singbox: 'إعدادات النفق'
    },
    toast: {
        ip_check_please_wait: 'يرجى الانتظار بضع ثوانٍ لإعادة المحاولة!',
        ir_location:
            'تم الاتصال بـ Cloudflare بعنوان IP إيراني، وهو مختلف عن عنوان IP الفعلي الخاص بك. يمكنك استخدامه لتجاوز التصفية، ولكن ليس العقوبات. لا تقلق! يمكنك تغيير الموقع في الإعدادات باستخدام خيار "Gool" أو "psiphon".',
        btn_submit: 'فهمت',
        copied: 'تم النسخ!',
        cleared: 'تم مسح السجل!',
        please_wait: 'يرجى الانتظار ...',
        offline: 'أنت غير متصل!',
        settings_changed: 'يتطلب تطبيق الإعدادات إعادة الاتصال.',
        hardware_usage: 'تمكين هذا الخيار سيزيد من استهلاك موارد الأجهزة.',
        config_added: 'تم إضافة الإعداد بنجاح، وللاستفادة منه يجب عليك النقر على الاتصال.',
        profile_added: 'تمت إضافة نقطة النهاية بنجاح إلى الملف الشخصي.',
        endpoint_added: 'تم استبدال نقطة النهاية بنجاح.'
    },
    settings: {
        title: 'إعدادات Warp',
        more: 'المزيد من الإعدادات',
        method_warp: 'Warp',
        method_warp_desc: 'تمكين Warp',
        method_gool: 'Gool',
        method_gool_desc: 'تمكين WarpInWarp',
        method_psiphon: 'Psiphon',
        method_psiphon_desc: 'تمكين Psiphon',
        method_psiphon_location: 'البلد',
        method_psiphon_location_auto: 'عشوائي',
        method_psiphon_location_desc: 'اختر عنوان IP للدولة المطلوبة',
        endpoint: 'نقطة النهاية',
        endpoint_desc: 'مزيج من عنوان IP أو اسم النطاق، مع المنفذ',
        license: 'الرخصة',
        license_desc: 'يتم استهلاك الرخصة بشكل مضاعف',
        option: 'إعدادات التطبيق',
        network: 'إعدادات الشبكة',
        proxy_mode: 'التكوين',
        proxy_mode_desc: 'تعريف إعدادات البروكسي',
        port: 'منفذ البروكسي',
        port_desc: 'تعريف منفذ بروكسي التطبيق',
        share_vpn: 'مشاركة (LAN)',
        share_vpn_desc: 'مشاركة بروكسي عبر الشبكة',
        dns: 'DNS',
        dns_desc: 'حظر الإعلانات والمحتوى للبالغين',
        dns_error: 'ينطبق على طرق Warp و Gool',
        ip_data: 'فحص IP',
        ip_data_desc: 'عرض IP والموقع بعد الاتصال',
        data_usage: 'استهلاك البيانات',
        data_usage_desc: 'عرض استهلاك البيانات وسرعة الاتصال في الوقت الحقيقي',
        dark_mode: 'الوضع الداكن',
        dark_mode_desc: 'تحديد وضع العرض للتطبيق',
        lang: 'اللغة',
        lang_desc: 'تغيير لغة واجهة التطبيق',
        open_login: 'بدء عند تسجيل الدخول',
        open_login_desc: 'فتح عند بدء تشغيل النظام',
        auto_connect: 'الاتصال التلقائي',
        auto_connect_desc: 'الاتصال عند فتح التطبيق',
        system_tray: 'علبة النظام',
        system_tray_desc: 'عدم وضع أيقونة البرنامج في شريط المهام',
        force_close: 'الإغلاق القسري',
        force_close_desc: 'عدم البقاء في علبة النظام بعد الخروج',
        shortcut: 'الملاحة',
        shortcut_desc: 'اختصارات في الصفحة الرئيسية',
        restore: 'استعادة',
        restore_desc: 'تطبيق الإعدادات الافتراضية للتطبيق',
        scanner: 'إعدادات الماسح الضوئي',
        scanner_alert: 'يتم تنشيط الماسح الضوئي إذا كنت تستخدم عنوان النهاية الافتراضي.',
        scanner_ip_type: 'نوع نقطة النهاية',
        scanner_ip_type_auto: 'تلقائي',
        scanner_ip_type_desc: 'للعثور على عنوان IP لنقطة النهاية',
        scanner_rtt: 'المدة',
        scanner_rtt_default: 'افتراضي',
        scanner_rtt_desc: 'حد RTT للماسح الضوئي',
        scanner_reserved: 'محجوز',
        scanner_reserved_desc: 'تجاوز القيمة المحجوزة لـ WireGuard',
        routing_rules: 'القائمة السوداء',
        routing_rules_desc: 'منع المرور عبر warp',
        routing_rules_disabled: 'معطل',
        routing_rules_items: 'العناصر',
        profile: 'الملف الشخصي',
        profile_desc: 'نقاط النهاية المحفوظة من قبلك',
        singbox: 'إعدادات Singbox',
        close_singbox: 'إيقاف العملية',
        close_singbox_desc: 'إغلاق sing-box تلقائيًا عند قطع الاتصال',
        close_helper: 'إيقاف المساعد',
        close_helper_desc: 'إغلاق المساعد تلقائيًا عند الخروج',
        mtu: 'قيمة MTU',
        mtu_desc: 'تعيين وحدة الإرسال القصوى',
        geo_block: 'الحظر',
        geo_block_desc: 'إعلانات، برامج ضارة، تصيد وعمّال تعدين العملات الرقمية',
        geo_rules_ip: 'توجيه IP',
        geo_rules_ip_desc: 'تطبيق قواعد GeoIP',
        geo_rules_site: 'توجيه الويب',
        geo_rules_site_desc: 'تطبيق قواعد GeoSite',
        more_helper: 'إعدادات المساعد',
        singbox_log: 'التسجيل',
        singbox_log_desc: 'تعيين مستوى التسجيل',
        singbox_stack: 'الهيكل',
        singbox_stack_desc: 'تعيين نوع الهيكل',
        singbox_sniff: 'الاستنشاق',
        singbox_sniff_desc: 'تفعيل الاستنشاق'
    },
    tabs: {
        home: 'اتصال',
        warp: 'Warp',
        network: 'الشبكة',
        scanner: 'الماسح الضوئي',
        app: 'التطبيق',
        singbox: 'صندوق الغناء'
    },
    modal: {
        endpoint_title: 'نقطة النهاية',
        license_title: 'الرخصة',
        license_desc:
            'لا يتطلب تشغيل البرنامج رخصة Warp بالضرورة، ولكن إذا كنت ترغب، يمكنك إدخال الرخصة هنا.',
        license_clear: 'مسح',
        port_title: 'منفذ البروكسي',
        restore_title: 'استعادة التغييرات',
        restore_desc:
            'بتأكيد عملية استعادة التغييرات، ستعود جميع إعدادات البرنامج إلى حالتها الافتراضية وسيتم قطع الاتصال.',
        routing_rules_sample: 'عينة',
        routing_rules_alert_tun: 'فقط قواعد التوجيه للدومين، ip والتطبيق ستؤثر على تكوين Tun.',
        routing_rules_alert_system:
            'باستثناء قاعدة توجيه التطبيق، ستؤثر القواعد الأخرى على تكوين نظام الوكيل.',
        endpoint_default: 'افتراضي',
        endpoint_suggested: 'مقترح',
        endpoint_latest: 'الأحدث',
        endpoint_update: 'تلقي نقاط النهاية المقترحة',
        endpoint_paste: 'لصق نقطة النهاية النشطة',
        profile_title: 'الملف الشخصي',
        profile_name: 'العنوان',
        profile_endpoint: 'نقطة النهاية',
        profile_limitation: (value) => `يمكنك إضافة حد أقصى من ${value} نقاط النهاية.`,
        mtu_title: 'قيمة MTU',
        mtu_desc:
            'تشير وحدة الإرسال القصوى (MTU) إلى الحد الأقصى لحجم حزم البيانات، والتي يجب تعيينها بين 1000 و 9999.',
        confirm: 'أؤكد',
        update: 'تحديث',
        cancel: 'إلغاء'
    },
    log: {
        title: 'سجل التطبيق',
        desc: 'إذا تم إنشاء سجل بواسطة البرنامج، فسيتم عرضه هنا.',
        error_invalid_license: 'الرخصة المدخلة غير صالحة؛ قم بإزالتها.',
        error_too_many_connected: 'تم استيفاء حد استخدام الرخصة؛ قم بإزالتها.',
        error_access_denied: 'قم بتشغيل البرنامج كـ "تشغيل كمسؤول".',
        error_failed_set_endpoint: 'تحقق أو استبدل قيمة نقطة النهاية، أو حاول مرة أخرى.',
        error_warp_identity: 'خطأ في التحقق من الهوية على Cloudflare؛ حاول مرة أخرى.',
        error_script_failed: 'واجه البرنامج خطأ؛ حاول مرة أخرى.',
        error_object_null: 'واجه البرنامج خطأ؛ حاول مرة أخرى.',
        error_port_already_in_use: (value) =>
            `المنفذ ${value} يتم استخدامه بواسطة برنامج آخر؛ قم بتغييره.`,
        error_port_socket: 'استخدم منفذ آخر.',
        error_port_restart: 'المنفذ قيد الاستخدام؛ جاري إعادة التشغيل ...',
        error_unknown_flag: 'تم تنفيذ أمر غير صالح في الخلفية.',
        error_deadline_exceeded: 'انتهت مدة الاتصال؛ حاول مرة أخرى.',
        error_configuration_encountered: 'واجهت إعدادات البروكسي خطأ!',
        error_desktop_not_supported: 'بيئة سطح المكتب غير مدعومة!',
        error_configuration_not_supported:
            'إعدادات البروكسي غير مدعومة في نظام التشغيل الخاص بك، ولكن يمكنك استخدام Warp Proxy يدويًا.',
        error_configuring_proxy: (value) => `حدث خطأ في تكوين البروكسي لـ ${value}!`,
        error_wp_not_found: 'ملف warp-plus غير موجود بجانب حزمة التطبيق!',
        error_wp_stopped: 'واجه ملف warp-plus مشكلة في التشغيل!',
        error_connection_failed: 'لم يكن الاتصال بـ 1.1.1.1 ممكنًا.',
        error_country_failed: 'لا يمكن الاتصال بالبلد المحدد.',
        error_singbox_failed_stop: 'فشل في إيقاف صندوق الغناء!',
        error_singbox_failed_start: 'فشل في بدء تشغيل صندوق الغناء!',
        error_wp_reset_peer: 'تم قطع الاتصال بـ Cloudflare بشكل غير متوقع!',
        error_failed_connection: 'فشل في إنشاء الاتصال!',
        error_canceled_by_user: 'تم إلغاء العملية من قبل المستخدم.'
    },
    about: {
        title: 'حول التطبيق',
        desc: 'هذا البرنامج هو نسخة غير رسمية ولكن موثوقة من تطبيق Oblivion لنظامي Windows، Linux، وMac.\nتم إعداد برنامج Oblivion Desktop بناءً على واجهة المستخدم من الإصدار الأصلي الذي طوره Yousef Ghobadi. تم إعداده بهدف الوصول المجاني إلى الإنترنت، وأي تغيير في الاسم أو استخدام تجاري له غير مسموح به.',
        slogan: 'الإنترنت، للجميع أو لا أحد!'
    },
    systemTray: {
        connect: 'اتصال',
        connecting: 'جارٍ الاتصال ...',
        connected: 'متصل',
        disconnecting: 'جارٍ قطع الاتصال ...',
        settings: 'الإعدادات',
        settings_warp: 'Warp',
        settings_network: 'الشبكة',
        settings_scanner: 'الماسح الضوئي',
        settings_app: 'التطبيق',
        about: 'حول',
        log: 'السجل',
        speed_test: 'اختبار السرعة',
        exit: 'خروج'
    },
    update: {
        available: 'تحديث متاح',
        available_message: (value) => `يتوفر إصدار جديد من ${value}. هل تريد التحديث الآن؟`,
        ready: 'التحديث جاهز',
        ready_message: (value) =>
            `الإصدار الجديد من ${value} جاهز. سيتم تثبيته بعد إعادة التشغيل. هل تريد إعادة التشغيل الآن؟`
    },
    speedTest: {
        title: 'اختبار السرعة',
        initializing: 'جارٍ تهيئة اختبار السرعة ...',
        click_start: 'انقر على الزر لبدء اختبار السرعة',
        error_msg: 'حدث خطأ أثناء اختبار السرعة. يرجى المحاولة مرة أخرى.',
        server_unavailable: 'خادم اختبار السرعة غير متاح',
        download_speed: 'سرعة التنزيل',
        upload_speed: 'سرعة الرفع',
        latency: 'التأخير',
        jitter: 'التذبذب'
    }
};
export default arabic;
