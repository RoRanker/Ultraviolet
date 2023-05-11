/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/yes.handler.js',
    client: '/yes.client.js',
    bundle: '/yes.bundle.js',
    config: '/yes.config.js',
    sw: '/yes.sw.js',
};
