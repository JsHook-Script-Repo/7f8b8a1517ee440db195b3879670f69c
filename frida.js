if (common.data.packagename == 'com.maobu.games.xhzg') {
    Java.perform(function () {
        var times = setInterval(function () {
            var address;
            try {
                address = Module.findBaseAddress('libil2cpp.so')
            } catch (e) {
            }
            if (address) {
                clearInterval(times);
                var get_P_IsPlayer = new NativeFunction(address.add('0x1e99408'), 'bool', ['pointer']);
                Interceptor.attach(address.add('0x1ea9b5c'), {
                    onEnter: function (args) {
                        if (get_P_IsPlayer(args[0]) == 0) {
                            args[11] = ptr(-9999999999999)
                        } else {
                            args[11] = ptr(9999999999999)
                        }
                    },
                    onLeave: function (retval) {
                    }
                });
            }
        }, 100);
    });
}
