import { NextRequest, NextResponse } from 'next/server';

// Force the route to be dynamically rendered
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate the required fields
    if (!data.name || !data.email || !data.company || !data.role) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save the data to a database
    // 2. Send a notification email
    // 3. Connect to a CRM system
    // For now, we'll just log it and return a success response
    console.log('Demo request received:', data);

    // TODO: Add your actual logic for handling the demo request
    // Examples:
    // - Store in a database
    // - Send an email notification to your team
    // - Integrate with a CRM system like HubSpot or Salesforce
    // - Send a confirmation email to the user

    return NextResponse.json(
      { 
        success: true, 
        message: 'Demo request received. We will contact you shortly!' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
