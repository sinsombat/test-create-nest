-- CreateTable
CREATE TABLE "customer" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "earn" (
    "id" SERIAL NOT NULL,
    "uid" TEXT,
    "price" INTEGER NOT NULL,

    CONSTRAINT "earn_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_email_key" ON "customer"("email");
