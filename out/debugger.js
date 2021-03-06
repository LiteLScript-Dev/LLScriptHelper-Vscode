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
exports.openLocalFile = exports.reSetTerminal = exports.reloadPlugins = exports.loadPlugins = exports.stopTerminal = exports.runTerminal = exports.terminal = void 0;
const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
const os = require("os");
function runTerminal() {
    var bdsDir = String(vscode.workspace.getConfiguration().get('LLScriptHelper.bds-LLScriptHelperDir'));
    var bds = String(vscode.workspace.getConfiguration().get('LLScriptHelper.bds-TaskCmd'));
    var args = vscode.workspace.getConfiguration('').get('LLScriptHelper.bds-TaskCmd-Args');
    if (bdsDir === 'null' || bdsDir === null) {
        selectedDir();
    }
    else if (bds === 'null' || bds === null) {
        selectedTask(bdsDir);
    }
    else {
        if (exports.terminal === undefined && os.platform() === "win32") {
            exports.terminal = vscode.window.createTerminal({
                name: 'LiteLoaderScript Dev',
                shellPath: bds,
                shellArgs: args,
                cwd: bdsDir
            });
            exports.terminal.show();
            vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', true);
        }
        else {
            exports.terminal = vscode.window.createTerminal({
                name: 'LiteLoaderScript Dev',
                shellPath: bds,
                shellArgs: args,
                cwd: bdsDir
            });
        }
    }
}
exports.runTerminal = runTerminal;
function stopTerminal() {
    exports.terminal === null || exports.terminal === void 0 ? void 0 : exports.terminal.sendText('stop');
    exports.terminal === null || exports.terminal === void 0 ? void 0 : exports.terminal.dispose();
    exports.terminal = undefined;
    vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', false);
}
exports.stopTerminal = stopTerminal;
function loadPlugins(fileUri) {
    if (exports.terminal === undefined) {
        vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', false);
        vscode.window.showInformationMessage('LiteLoader??????????????????', '??????').then(function (t) {
            if (t === '??????') {
                runTerminal();
            }
        });
    }
    else {
        var uris = fileUri.fsPath;
        exports.terminal.sendText('lxl load ' + '"' + uris + '"');
        vscode.window.showInformationMessage('?????? ' + uris + ' ?????????');
    }
}
exports.loadPlugins = loadPlugins;
function reloadPlugins(fileUri) {
    if (exports.terminal === undefined) {
        vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', false);
        vscode.window.showInformationMessage('BDS??????????????????', '??????').then(function (t) {
            if (t === '??????') {
                runTerminal();
            }
        });
    }
    else {
        var uris = path.basename(fileUri.fsPath);
        //reload??????
        var reload = 'lxl reload ';
        if (uris.indexOf(' ') != -1) {
            reload = 'lxl reload ' + '"' + uris + '"';
        }
        else {
            reload = 'lxl reload ' + uris;
        }
        exports.terminal.sendText(reload);
        vscode.window.showInformationMessage('?????? ' + uris + ' ?????????');
    }
}
exports.reloadPlugins = reloadPlugins;
function selectedDir() {
    vscode.window.showInformationMessage('???????????????LiteLoader?????????BDS??????', '????????????').then(function (t) {
        if (t === '????????????') {
            vscode.window.showOpenDialog({
                title: '????????????LiteLoader?????????BDS?????????',
                canSelectFolders: true,
                canSelectMany: false
            }).then(function (uri) {
                if (uri !== undefined) {
                    var uris = uri[0].fsPath;
                    vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-LLScriptHelperDir', uris);
                    vscode.window.showInformationMessage('?????????????????????' + uris);
                    selectedTask(uris);
                }
            });
        }
    });
}
function selectedTask(uris) {
    //??????bds(windows)
    if (os.platform() !== "win32") {
        var fileList = fs.readdirSync(uris);
        if (fileList.indexOf("bedrock_server.exe") != -1) {
            vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-TaskCmd', "bedrock_server.exe");
            vscode.workspace.getConfiguration('').update("LLScriptHelper.bds-TaskCmd-Args", ['| pause']);
            vscode.window.showInformationMessage('???????????????????????????' + "bedrock_server.exe");
        }
        else if (fileList.indexOf("bedrock_server_mod.exe") != -1) {
            vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-TaskCmd', "bedrock_server_mod.exe");
            vscode.workspace.getConfiguration('').update("LLScriptHelper.bds-TaskCmd-Args", ['| pause']);
            vscode.window.showInformationMessage('???????????????????????????' + "bedrock_server_mod.exe");
        }
        else {
            vscode.window.showWarningMessage('????????????BDS?????????', '????????????').then(function (t) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (t === "????????????") {
                        let task = yield vscode.window.showInputBox({ placeHolder: '???????????????????????????' });
                        if (task) {
                            let uri = vscode.Uri.parse(task);
                            let uriself = uri.fsPath;
                            if (uri.fsPath[0] === '/') {
                                uriself = uri.fsPath.substring(1);
                            }
                            vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-TaskCmd', uriself);
                            vscode.workspace.getConfiguration('').update("LLScriptHelper.bds-TaskCmd-Args", []);
                            yield vscode.window.showInformationMessage('???????????????????????????' + uriself);
                        }
                    }
                });
            });
        }
    }
    else {
        vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-TaskCmd', 'bedrock_server');
        vscode.workspace.getConfiguration('').update("LLScriptHelper.bds-TaskCmd-Args", []);
        vscode.window.showWarningMessage('????????????BDS????????????,?????????settings.json????????????', '????????????');
        ///openLocalFile(+"\\.vscode\\settings.json");
    }
}
function reSetTerminal() {
    exports.terminal = undefined;
}
exports.reSetTerminal = reSetTerminal;
function openLocalFile(filePath) {
    // ??????TextDocument??????
    vscode.workspace.openTextDocument(filePath)
        .then(doc => {
        // ???VSCode????????????????????????????????????
        vscode.window.showTextDocument(doc);
    }, err => {
        console.log(`Open ${filePath} error, ${err}.`);
    }).then(undefined, err => {
        console.log(`Open ${filePath} error, ${err}.`);
    });
}
exports.openLocalFile = openLocalFile;
//# sourceMappingURL=debugger.js.map