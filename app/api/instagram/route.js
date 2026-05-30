export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const userId = "70201298230";

    const response = await fetch(
      `https://instagram-api-fast-reliable-data-scraper.p.rapidapi.com/profile?user_id=${userId}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
          "x-rapidapi-host":
            "instagram-api-fast-reliable-data-scraper.p.rapidapi.com",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`RapidAPI Error: ${response.status}`);
    }

    const data = await response.json();

    return Response.json({
      followers: data.follower_count,
      source: "rapidapi",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        followers: 0,
        error: error.message,
      },
      { status: 500 }
    );
  }
}