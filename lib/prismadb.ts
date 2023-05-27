// Global files are not affected by hot reloading

import { PrismaClient } from "@prisma/client";

let client = global.prismadb || new PrismaClient();
if(process.env.NODE_ENV === 'production') {
    global.prismadb = client;
} else {
    if(!global.prismadb) {
        global.prismadb = new PrismaClient()
    }
    client = global.prismadb
}

export default client;

