---ð¡ ç³»ç»è°ç¨ API
è¿äºAPIæä¾äºæ§è¡ä¸äºç³»ç»è°ç¨çæ¥å£
---@class system 
 system = {}

---è°ç¨shellæ§è¡æå®ç³»ç»å½ä»¤
---@param cmd string æ§è¡çç³»ç»å½ä»¤
---@param callback fun(exitcode:number,output:number):any shellè¿ç¨ç»æä¹åè¿åæ°æ®ä½¿ç¨çåè°å½æ°
---@param timeLimit? number ï¼å¯éåæ°ï¼å½ä»¤è¿è¡çæé¿æ¶éï¼åä½ä¸ºæ¯«ç§
---@return boolean æ¯å¦æåå¯å¨å½ä»¤
function system.cmd(cmd,callback,timeLimit)
end

---è¿è¡æå®ä½ç½®ç¨åº
---@param process string è¿è¡çç¨åºè·¯å¾ï¼ä¸å½ä»¤è¡åæ°ï¼
---@param callback fun(exitcode:number,output:number):any ç¨åºè¿ç¨ç»æä¹åè¿åæ°æ®ä½¿ç¨çåè°å½æ°
---@param timeLimit? number ï¼å¯éåæ°ï¼ç¨åºè¿ç¨è¿è¡çæé¿æ¶éï¼åä½ä¸ºæ¯«ç§
---@return boolean æ¯å¦æåå¯å¨è¿ç¨
function system.newProcess(process,callback,timeLimit)
end

---è·åå½åæ¶é´å­ç¬¦ä¸²
---@return string å½åçæ¶é´å­ç¬¦ä¸²ï¼ä½¿ç¨å½å°æ¶åºå24å°æ¶å¶ã
function system.getTimeStr()
end

---è·åå½åçæ¶é´å¯¹è±¡
---@return TimeObject å½åçæ¶é´å¯¹è±¡
function system.getTimeObj()
end

---éæºçæä¸ä¸ª GUID å­ç¬¦ä¸²
---@return string ä¸ä¸ªéæºçæçå¯ä¸æ è¯ç¬¦GUID
function system.randomGuid()
end