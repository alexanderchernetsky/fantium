import DBService from "@/app/api/dbService";
import transformDBResponse from "@/app/api/transformDBResponse";

export async function GET(request: Request) {
  const dbServiceInstance = new DBService();
  // todo: replace hardcoded sportsman id
  const response = await dbServiceInstance.getPlansById(123);

  const transformedResponse = transformDBResponse(response);

  return new Response(JSON.stringify(transformedResponse), { status: 200 })
}
