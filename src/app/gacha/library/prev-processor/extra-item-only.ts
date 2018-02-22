import { GachaItem } from '../../interface/gacha-item';

// 限制低星物品出货，用于抽取额外的产物
const blackList = ['stigmata', 'weapon', 'character', 'fragment'];
export const extraOnlyProcessor = function(item: GachaItem, index: number) {
  if (blackList.includes(item.type) && item.level === 4) {

    return;
  }
  // console.log(item.name);
  return item;
};


