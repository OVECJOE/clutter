/*
  Warnings:

  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShoppingListItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `inventories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shopping_lists` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."ShoppingListItem" DROP CONSTRAINT "ShoppingListItem_item_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."ShoppingListItem" DROP CONSTRAINT "ShoppingListItem_list_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."categories" DROP CONSTRAINT "categories_parent_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."inventories" DROP CONSTRAINT "inventories_item_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."inventories" DROP CONSTRAINT "inventories_location_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."items" DROP CONSTRAINT "items_category_id_fkey";

-- DropTable
DROP TABLE "public"."Location";

-- DropTable
DROP TABLE "public"."ShoppingListItem";

-- DropTable
DROP TABLE "public"."categories";

-- DropTable
DROP TABLE "public"."inventories";

-- DropTable
DROP TABLE "public"."items";

-- DropTable
DROP TABLE "public"."shopping_lists";

-- CreateTable
CREATE TABLE "inventories" (
    "id" TEXT NOT NULL,
    "item_id" VARCHAR(64) NOT NULL,
    "user_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit" VARCHAR(32) NOT NULL,
    "expiry_date" TIMESTAMP(3),
    "purchase_date" TIMESTAMP(3) NOT NULL,
    "location_id" VARCHAR(64) NOT NULL,
    "note" TEXT,

    CONSTRAINT "inventories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "description" TEXT,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(128) NOT NULL,
    "description" TEXT,
    "barcode" VARCHAR(64),
    "default_unit" VARCHAR(32) NOT NULL,
    "category_id" VARCHAR(64) NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "description" TEXT,
    "parent_id" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shopping_lists" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" VARCHAR(128) NOT NULL,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shopping_lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shopping_list_items" (
    "id" TEXT NOT NULL,
    "list_id" VARCHAR(64) NOT NULL,
    "item_id" VARCHAR(64) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit" VARCHAR(32) NOT NULL,
    "is_purchased" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "shopping_list_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "inventories_user_id_idx" ON "inventories"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "inventories_item_id_user_id_location_id_key" ON "inventories"("item_id", "user_id", "location_id");

-- CreateIndex
CREATE INDEX "categories_parent_id_idx" ON "categories"("parent_id");

-- CreateIndex
CREATE UNIQUE INDEX "shopping_lists_user_id_name_key" ON "shopping_lists"("user_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "shopping_list_items_list_id_item_id_key" ON "shopping_list_items"("list_id", "item_id");

-- AddForeignKey
ALTER TABLE "inventories" ADD CONSTRAINT "inventories_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventories" ADD CONSTRAINT "inventories_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shopping_list_items" ADD CONSTRAINT "shopping_list_items_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "shopping_lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shopping_list_items" ADD CONSTRAINT "shopping_list_items_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
