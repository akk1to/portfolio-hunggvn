import { NextResponse } from "next/server"

// Discord API endpoint for user info
const DISCORD_API_BASE = "https://discord.com/api/v10"

export async function GET() {
  try {
    // You'll need to replace this with your actual Discord user ID
    const userId = "727497287777124414" // Replace with your Discord user ID

    // Note: This is a simplified example. In a real implementation, you'd need:
    // 1. A Discord bot token or OAuth2 setup
    // 2. Proper authentication
    // 3. User permissions

    // For now, we'll return mock data that simulates a real Discord API response
    const mockDiscordData = {
      id: userId,
      username: "Hungg",
      discriminator: "0001",
      avatar: "url('/logo.jpg?height=200&width=200')",
      status: "idle", // online, idle, dnd, offline
      activities: [
        {
          name: "Youtube",
          type: 0, // Playing
          details: "Playing Minecraft",
          state: "HunggSMP Network",
          timestamps: {
            start: Date.now() - 3600000, // 1 hour ago
          },
        },
      ],
      client_status: {
        desktop: "online",
      },
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      data: mockDiscordData,
    })
  } catch (error) {
    console.error("Discord API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch Discord status",
        data: {
          username: "shine_kka",
          status: "offline",
          activities: [],
        },
      },
      { status: 500 },
    )
  }
}
