// visit ./openItem.ts for implementation
// the B stands for Boost
export interface BItem {
  name: string;
  emoji: string; // emoji id

  description: string; // description
  dropChance: number; // out of 100
  currency?: boolean;
  // non-openable things (like ego-coins) can't be opened, and will lack implementation.
}

// Name the items!
export enum ItemEnum {
  EgoCoin,
  CheapPhone,
  ExtraFinger,
  Coffee,
  ChestChest,
  DailyChest,
  ApplePhone,
  ChestChestChest,
  Glue,
  SuperGlue,
  CraftingMat,
  CraftingChest,
  KnowledgeBook,
  GoldenCycle,
  EgoCoinMaker,
  GoldenCycleMaker,
  VoteCrate,
  BronzeQuestChest,
  SilverQuestChest,
  GoldQuestChest
}

export const items: BItem[] = [{
  name: "Ego-Coin",
  emoji: "", // todo
  description: "Made from only those with the biggest egoes!",
  dropChance: 25,
  currency: true
}, {
  name: "Cheap iPhone",
  emoji: "",
  description: "The camera doesn't even work!",
  dropChance: 8
}, {
  name: "Extra Finger",
  emoji: "",
  description: "Gross... but hey, more efficiency!",
  dropChance: 15
}, {
  name: "Coffee",
  emoji: "",
  description: "Use this to code with a boost!",
  dropChance: 10
}, {
  name: "Chest Chest",
  emoji: "",
  description: "Chests may contain chests.",
  dropChance: 8
}, {
  name: "Daily Chest",
  emoji: "",
  description: "Get this item through `&d`!",
  dropChance: 0
}, {
  name: "Apple iPhone",
  emoji: "",
  description: "An iPhone... with an ego!",
  dropChance: 5
}, {
  name: "Chest Chest Chest",
  emoji: "",
  description: "Chests contain better loot!",
  dropChance: 0.01
}, {
  name: "Glue",
  emoji: "",
  description: "Glue can be used as an adhesive.",
  dropChance: 13
}, {
  name: "Super Glue",
  emoji: "",
  description: "Glue... glued together!",
  dropChance: 2
}, {
  name: "Crafting Materials",
  emoji: "",
  description: "One of the key things to make items.",
  dropChance: 20
}, {
  name: "Crafting Chest",
  emoji: "",
  description: "Only drops crafting materials.",
  dropChance: 15
}, {
  name: "Book of knowledge",
  emoji: "",
  description: "Instantly gain xp!",
  dropChance: 10
}, {
  name: "Golden Cycle",
  emoji: "",
  description: "Use this to buy boosts!",
  dropChance: 24.9, // >:)
  currency: true
}, {
  name: "Ego-Coin Maker",
  emoji: "",
  description: "Generates 5% of your cycles into ego-coins!",
  dropChance: 5
}, {
  name: "Golden Cycle Maker",
  emoji: "",
  description: "Generates 5% of your cycles into golden cycles!",
  dropChance: 5
}, {
  name: "Vote Crate",
  emoji: "",
  description: "This rare crate (not chest!) gives you all sorts of bonuses!",
  dropChance: 0
}, {
  name: "Bronze Quest Chest",
  emoji: "",
  description: "For completing an easy quest!",
  dropChance: 0
}, {
  name: "Silver Quest Chest",
  emoji: "",
  description: "For completing a medium quest!",
  dropChance: 0
}, {
  name: "Gold Quest Chest",
  emoji: "",
  description: "For completing a hard quest!",
  dropChance: 0
}];
