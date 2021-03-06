/**
 * ð å®ä½å¯¹è±¡ API
å¨LXLä¸­ï¼ä½¿ç¨ãå®ä½å¯¹è±¡ãæ¥æä½åè·åæä¸ä¸ªå®ä½çç¸å³ä¿¡æ¯ã
 */ 
class Entity {
  
/**
 * å®ä½åç§°
 * @type String
 */ 
 name;
/**
 * å®ä½æ åç±»åå
 * @type String
 */ 
 type;
/**
 * å®ä½çæ¸¸æåid
 * @type Integer
 */ 
 id;
/**
 * å®ä½æå¨åæ 
 * @type FloatPos
 */ 
 pos;
/**
 * å®ä½æå¨çæ¹ååæ 
 * @type IntPos
 */ 
 blockPos;
/**
 * å®ä½æå¤§çå½å¼
 * @type Integer
 */ 
 maxHealth;
/**
 * å®ä½å½åçå½å¼
 * @type Integer
 */ 
 health;
/**
 * å®ä½å½åæ¯å¦æ¬ç©º
 * @type Boolean
 */ 
 inAir;
/**
 * å®ä½å½åéåº¦
 * @type Float
 */ 
 speed;
/**
 * å®ä½å½åæ¯å¦å¨æ°´ä¸­
 * @type Boolean
 */ 
 inWater;
  
  


/**
 * ä¼ éå®ä½è³æå®ä½ç½®
 * @param {FloatPos} pos ç®æ ä½ç½®åæ  ï¼æèä½¿ç¨x, y, z, dimidæ¥ç¡®å®ç©å®¶ä½ç½®ï¼
 * @returns {boolean} æ¯å¦æåä¼ é
 */
 teleport(pos)

/**
 * ä¼ éå®ä½è³æå®ä½ç½®
 * @param {number} x x
 * @param {number} y y
 * @param {number} z z
 * @param {number} dimid dimid
 * @returns {boolean} æ¯å¦æåä¼ é
 */
 teleport(x,y,z,dimid)

/**
 * ææ­»æå®å®ä½ 
 * @returns {boolean} æ¯å¦æåæ§è¡
 */
 kill()

/**
 * ä½¿æå®å®ä½çç«
 * @param {number} time çç«æ¶é¿ï¼åä½ç§
 * @returns {boolean} æ¯å¦æåçç«
 */
 setOnFire(time)

/**
 * å¤æ­ä¸ä¸ªå®ä½å¯¹è±¡æ¯ä¸æ¯ç©å®¶
 * @returns {boolean} å½åå®ä½å¯¹è±¡æ¯ä¸æ¯ç©å®¶
 */
 isPlayer()

/**
 * å°å®ä½å¯¹è±¡è½¬æ¢ç©å®¶å¯¹è±¡
 * @returns {Player|null} è½¬æ¢æçç©å®¶å¯¹è±¡
å¦ææ­¤å®ä½å¯¹è±¡æåçä¸æ¯æä¸ªç©å®¶ï¼æèè½¬æ¢å¤±è´¥ï¼åè¿å `null`
 */
 toPlayer()

/**
 * è·åçç©çç²æ çå®¹å¨å¯¹è±¡  
 * @returns {Container} æ­¤å®ä½çç²æ å¯¹åºçå®¹å¨å¯¹è±¡
 */
 getArmor()

/**
 * å¤æ­çç©æ¯å¦æ¥æå®¹å¨ï¼çç²æ é¤å¤ï¼
 * @returns {boolean} ä¸ªçç©å®ä½æ¯å¦æ¥æå®¹å¨
 */
 hasContainer()

/**
 * è·åçç©ææ¥æçå®¹å¨å¯¹è±¡ï¼çç²æ é¤å¤ï¼
 * @returns {Container} è¿ä¸ªçç©å®ä½ææ¥æçå®¹å¨å¯¹è±¡
 */
 getContainer()

/**
 * ä¸ºå®ä½å¢å ä¸ä¸ªTag
 * @param {string} tag è¦å¢å çtagå­ç¬¦ä¸²
 * @returns {boolean} æ¯å¦è®¾ç½®æå
 */
 addTag(tag)

/**
 * ä¸ºå®ä½ç§»é¤ä¸ä¸ªTag
 * @param {string} tag è¦ç§»é¤çtagå­ç¬¦ä¸²
 * @returns {boolean} æ¯å¦ç§»é¤æå
 */
 removeTag(tag)

/**
 * å®ä½æ¥æçææTagåè¡¨
 * @returns {string[]} å®ä½ææç tag å­ç¬¦ä¸²åè¡¨
 */
 getAllTags()

/**
 * æ£æ¥å®ä½æ¯å¦æ¥ææä¸ªTag
 * @param {string} tag è¦æ£æ¥çtagå­ç¬¦ä¸²
 * @returns {boolean} æ¯å¦æ¥æè¿ä¸ªTag
 */
 hasTag(tag)

/**
 * è·åå®ä½å¯¹åºçNBTå¯¹è±¡
 * @returns {NbtCompound} ç©å®¶çNBTå¯¹è±¡
 */
 getNbt()

/**
 * åå¥å®ä½å¯¹åºçNBTå¯¹è±¡
 * @param {NbtCompound} nbt NBTå¯¹è±¡
 * @returns {boolean} æ¯å¦æååå¥
 */
 setNbt(nbt)

/**
 * å¯¹å®ä½é æä¼¤å®³
æ³¨æï¼æ­¤å¤é æçä¼¤å®³ä¸ºçå®ä¼¤å®³ï¼æ æ³è¢«çç²ç­ä¿æ¤è£å¤åå
 * @param {number} damage å¯¹å®ä½é æçä¼¤å®³æ°å¼
 * @returns {boolean} æ¯å¦é æä¼¤å®³
 */
 hurt(damage)

/**
 * å·æ°çç©ç©åæ ãçç²æ 
 * @returns {boolean} 
 */
 refreshItems()  



}
