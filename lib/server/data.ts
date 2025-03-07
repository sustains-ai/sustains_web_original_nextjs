import postgres from 'postgres';

// Ensure DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set. Please check your .env file.');
}

// PostgreSQL connection
const sql = postgres(process.env.DATABASE_URL, { ssl: { rejectUnauthorized: false } });

/* ✅ Fetch all EV Sales Data */
export async function fetchEVSalesData() {
  try {
    const data = await sql`
      SELECT * FROM "EVSalesHistoric" ORDER BY year DESC;
    `;

    if (!data.length) {
      console.warn('⚠️ No EV sales data found.');
    }

    return data;
  } catch (error) {
    console.error('❌ Database Error:', error);
    throw new Error('Failed to fetch EV Sales data.');
  }
}

/* ✅ Fetch distinct years available in the dataset */
export async function fetchAvailableYears() {
  try {
    const data = await sql<{ year: number }[]>`
      SELECT DISTINCT year FROM "EVSalesHistoric" ORDER BY year DESC;
    `;

    return data.map((entry) => entry.year);
  } catch (error) {
    console.error('❌ Database Error:', error);
    throw new Error('Failed to fetch available years.');
  }
}

/* ✅ Fetch EV Sales Data filtered by year */
export async function fetchEVSalesByYear(year: number) {
  try {
    const data = await sql`
      SELECT * FROM "EVSalesHistoric" WHERE year = ${year} ORDER BY sales DESC;
    `;

    return data;
  } catch (error) {
    console.error('❌ Database Error:', error);
    throw new Error('Failed to fetch EV Sales data by year.');
  }
}

/* ✅ Fetch EV Sales Data filtered by country */
export async function fetchEVSalesByCountry(country: string) {
  try {
    const data = await sql`
      SELECT * FROM "EVSalesHistoric" WHERE country ILIKE ${'%' + country + '%'} ORDER BY year DESC;
    `;

    return data;
  } catch (error) {
    console.error('❌ Database Error:', error);
    throw new Error('Failed to fetch EV Sales data by country.');
  }
}

/* ✅ Fetch total EV sales for a given region */
export async function fetchEVSalesByRegion(region: string) {
  try {
    const data = await sql`
      SELECT * FROM "EVSalesHistoric" WHERE region ILIKE ${'%' + region + '%'} ORDER BY year DESC;
    `;

    return data;
  } catch (error) {
    console.error('❌ Database Error:', error);
    throw new Error('Failed to fetch EV Sales data by region.');
  }
}

/* ✅ Fetch aggregated EV sales by country */
export async function fetchEVSalesSummaryByCountry() {
  try {
    const data = await sql<{ country: string; totalSales: number }[]>`
      SELECT country, SUM(sales) AS totalSales FROM "EVSalesHistoric"
      GROUP BY country ORDER BY totalSales DESC;
    `;

    return data;
  } catch (error) {
    console.error('❌ Database Error:', error);
    throw new Error('Failed to fetch EV Sales summary by country.');
  }
}

/* ✅ Fetch total number of countries in dataset */
export async function fetchTotalCountries() {
  try {
    const data = await sql`
      SELECT COUNT(DISTINCT country) AS totalCountries FROM "EVSalesHistoric";
    `;

    return data[0]?.totalCountries || 0;
  } catch (error) {
    console.error('❌ Database Error:', error);
    throw new Error('Failed to fetch total countries.');
  }
}

/* ✅ Fetch total number of years in dataset */
export async function fetchTotalYears() {
  try {
    const data = await sql`
      SELECT COUNT(DISTINCT year) AS totalYears FROM "EVSalesHistoric";
    `;

    return data[0]?.totalYears || 0;
  } catch (error) {
    console.error('❌ Database Error:', error);
    throw new Error('Failed to fetch total years.');
  }
}

/* ✅ Fetch total EV sales count */
export async function fetchTotalEVSales() {
  try {
    const data = await sql`
      SELECT SUM(sales) AS totalSales FROM "EVSalesHistoric";
    `;

    return data[0]?.totalSales || 0;
  } catch (error) {
    console.error('❌ Database Error:', error);
    throw new Error('Failed to fetch total EV sales.');
  }
}
