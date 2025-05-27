// 词库分类
const words = {
  // 核心情感字
  emotion: ['痛', '殇', '劫', '囚', '泪', '烬', '寒', '孤', '残', '寂', '孽', '焚', '堕', '绊', '憾', '滞', '缚', '坠', '溺', '锁', '蚀', '憔', '悴', '辜', '负', '弃', '离', '殁', '怅', '惘', '凄', '戚', '愁', '忧', '郁', '懑', '哀', '叹', '嗟', '憾', '舛', '蹇', '厄', '难', '劫', '穷', '困', '累', '疲'],
  
  // 自然意象
  nature: ['风', '雨', '雪', '霜', '露', '雾', '云', '月', '星', '日', '江', '河', '湖', '海', '山', '林', '花', '草', '树', '叶', '鸿', '雁', '鹤', '鸦', '蝉', '蝶', '松', '竹', '梅', '兰', '菊', '荷', '蓬', '萍', '藤', '蔓', '苔', '藓', '石', '沙'],
  
  // 时间意象
  time: ['春', '夏', '秋', '冬', '晨', '昏', '晓', '暮', '夜', '昼', '朝', '夕', '年', '月', '日', '时', '分', '秒', '永', '恒', '瞬', '刹', '今', '昔', '古', '今', '往', '来', '前', '后', '始', '终', '初', '末', '新', '旧', '长', '短', '久', '暂'],
  
  // 动作词
  action: ['泣', '哭', '笑', '叹', '吟', '唱', '舞', '蹈', '行', '走', '飞', '翔', '游', '泳', '飘', '落', '升', '降', '起', '伏', '流', '淌', '涌', '动', '摇', '摆', '晃', '荡', '飘', '浮', '沉', '没', '坠', '落', '升', '腾', '飞', '翔', '游', '走'],
  
  // 状态词
  state: ['空', '虚', '幻', '梦', '影', '形', '魂', '魄', '心', '意', '情', '思', '念', '想', '忆', '忘', '醒', '眠', '醉', '梦', '醒', '觉', '悟', '迷', '惑', '惘', '怅', '惘', '惆', '怅', '忧', '愁', '悲', '欢', '离', '合', '聚', '散', '分', '合']
};

// 生成一个随机数
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 从数组中随机选择一个元素
const getRandomElement = (array) => {
  return array[getRandomInt(0, array.length - 1)];
};

// 组合规则
const patterns = [
  // 自然意象 + 情感 + 状态
  () => getRandomElement(words.nature) + getRandomElement(words.emotion) + getRandomElement(words.state),
  // 情感 + 动作 + 自然意象
  () => getRandomElement(words.emotion) + getRandomElement(words.action) + getRandomElement(words.nature),
  // 时间 + 情感 + 状态
  () => getRandomElement(words.time) + getRandomElement(words.emotion) + getRandomElement(words.state),
  // 状态 + 情感 + 自然意象
  () => getRandomElement(words.state) + getRandomElement(words.emotion) + getRandomElement(words.nature),
  // 动作 + 情感 + 时间
  () => getRandomElement(words.action) + getRandomElement(words.emotion) + getRandomElement(words.time)
];

// 生成一个六字ID
const generateId = () => {
  const pattern = getRandomElement(patterns);
  return pattern();
};

// 生成多个不重复的ID
const generateMultipleIds = (count) => {
  const ids = new Set();
  while (ids.size < count) {
    ids.add(generateId());
  }
  return Array.from(ids);
};

module.exports = {
  generateId,
  generateMultipleIds
}; 