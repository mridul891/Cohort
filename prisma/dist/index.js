"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertUser = (username, password, firstName, lastName) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        },
        select: {
            id: true
        }
    });
    console.log(res);
});
const updateUser = (username_1, _a) => __awaiter(void 0, [username_1, _a], void 0, function* (username, { firstName, lastName }) {
    const res = yield prisma.user.update({
        where: {
            email: username
        },
        data: {
            firstName,
            lastName
        }
    });
    console.log(res);
});
// updateUser('pandeym891@gmail.com', {
//     firstName: "Manu",
//     lastName: "Pandey"
// })
const deleteUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield prisma.user.delete({
        where: { email: username }
    });
    console.log(res);
});
// deleteUser('pandeym891@gmail.com')
const getTodo = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield prisma.user.findFirst({
        where: {
            email: username
        }, select: {
            id: true
        }
    });
    console.log(res);
});
getTodo("pandeym891@gmail.com");
