/*
  Warnings:

  - A unique constraint covering the columns `[name,is_default]` on the table `categories` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "categories_name_is_default_key" ON "categories"("name", "is_default");
