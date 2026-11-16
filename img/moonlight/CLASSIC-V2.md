# 经典暗夜精灵猫德重画

- 当前文件：`classic-v2.webp`，1536 × 1024。
- 生成方式：内置 `image_gen`，以原插画为编辑目标，以旧模型对照图为外观参考；PNG 输出仅转为 WebP（quality 88）。
- 参考图：https://wow.4fansites.de/bilder/news/katzenformen-nachtelfen.jpg
- 仅使用参考图右下角标注「Die alte Miezekatze」的原版猫德，其余五个后续模型不作为参考。
- 修正：去掉躯干、四肢、尾部虎纹，改为黄眼、暗色短毛、细尾和压低的头肩；头像裁切同步调整。
- `classic.webp` 为制作过程中的弃用初版，不包含在本仓库。新图仍是依照模型特征绘制的插画，而非游戏模型渲染。

## 完整提示

Use case: precise-object-edit. Image 1 is the WEBSITE BACKGROUND EDIT TARGET. Image 2 is a model reference sheet: use ONLY THE BOTTOM RIGHT CAT labeled 'Die alte Miezekatze' (the original Vanilla Night Elf druid cat), ignore ALL five other cats on that sheet. Redraw ONLY the cat in Image 1 to faithfully match that original classic game character in a detailed painterly rendering. Preserve the exact forest, crescent moon, stone platform, camera framing, dark empty left half, ambient violet night lighting and overall cat placement. Cat is lying alert on the same ledge, body facing left and head turned slightly toward viewer; lower the head and shoulders modestly for a stalking panther posture. Essential reference traits: smooth short blue-black/dark indigo-purple body fur WITHOUT ANY TIGER STRIPES on torso, legs or tail; pale cool gray-lavender broad muzzle, cheek tufts, chin and paws; clearly YELLOW GOLD eyes with dark pupils, NOT white or purple; broad angular feline nose and strong brow, two pronounced ivory saber fangs; elongated swept-back ears; reference's sharply swept head/neck crest, NOT a fluffy lion chest mane; lean long panther body, strong paws with visible claws, a slender smooth long tail NOT a fluffy striped tail. Preserve only the original reference's localized pale shoulder marking if visible, do not invent additional markings, jewelry, collars, leg bands, armor or glowing runes. Body must look like the bottom-right old game cat, NOT a purple tiger, housecat or modern druid form. Maintain image 1's premium painted environment and realistic lighting integration, but prioritize accurate classic character identity over decorative fur detail. No text, no UI, no watermarks. Output 1536x1024.
