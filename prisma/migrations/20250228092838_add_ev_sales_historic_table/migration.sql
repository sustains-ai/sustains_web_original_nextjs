/*
  Warnings:

  - You are about to drop the `Portfolio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Stock` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Portfolio" DROP CONSTRAINT "Portfolio_userId_fkey";

-- DropForeignKey
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_portfolioId_fkey";

-- DropTable
DROP TABLE "Portfolio";

-- DropTable
DROP TABLE "Stock";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Dataset" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "filePath" TEXT NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dataset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EVSalesHistoric" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "sales" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "datasetId" TEXT NOT NULL,

    CONSTRAINT "EVSalesHistoric_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EVSalesHistoric" ADD CONSTRAINT "EVSalesHistoric_datasetId_fkey" FOREIGN KEY ("datasetId") REFERENCES "Dataset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
