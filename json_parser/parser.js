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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var JSON_Parser = /** @class */ (function () {
    function JSON_Parser() {
    }
    JSON_Parser.prototype.fileContent = function (fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var data, parsedData, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs.promises.readFile(fileName, 'utf8')];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.parseData(data)];
                    case 2:
                        parsedData = _a.sent();
                        content = data.trim();
                        console.log(content);
                        return [2 /*return*/, this.verifyContent(content)];
                }
            });
        });
    };
    JSON_Parser.prototype.parseData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var test, i;
            return __generator(this, function (_a) {
                test = data.split("");
                console.log(test);
                for (i = 0; i < data.length; i++) {
                    console.log(data[i]);
                }
                return [2 /*return*/, ""];
            });
        });
    };
    JSON_Parser.prototype.verifyContent = function (content) {
        return __awaiter(this, void 0, void 0, function () {
            var stack, keyValue, keyPosition, i, current, check;
            return __generator(this, function (_a) {
                stack = [];
                keyValue = [];
                keyPosition = 0;
                for (i = 0; i < content.length; i++) {
                    current = content[i];
                    // Check Brackets
                    if (current == "{") {
                        stack.push(current);
                    }
                    else if (current == "}") {
                        check = stack[stack.length - 1];
                        if (current == "}" && (check != "{" || stack.length == 0)) {
                            return [2 /*return*/, false];
                        }
                        else {
                            stack.pop();
                        }
                    }
                }
                return [2 /*return*/, stack.length === 0];
            });
        });
    };
    JSON_Parser.prototype.run = function (argv) {
        return __awaiter(this, void 0, void 0, function () {
            var fileName, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileName = argv[0];
                        return [4 /*yield*/, this.fileContent(fileName)];
                    case 1:
                        response = _a.sent();
                        console.log(response);
                        return [2 /*return*/];
                }
            });
        });
    };
    return JSON_Parser;
}());
var parser = new JSON_Parser();
parser.run(process.argv.splice(2));
