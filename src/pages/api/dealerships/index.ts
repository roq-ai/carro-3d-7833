import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { dealershipValidationSchema } from 'validationSchema/dealerships';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getDealerships();
    case 'POST':
      return createDealership();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getDealerships() {
    const data = await prisma.dealership
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'dealership'));
    return res.status(200).json(data);
  }

  async function createDealership() {
    await dealershipValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.car?.length > 0) {
      const create_car = body.car;
      body.car = {
        create: create_car,
      };
    } else {
      delete body.car;
    }
    if (body?.team_member?.length > 0) {
      const create_team_member = body.team_member;
      body.team_member = {
        create: create_team_member,
      };
    } else {
      delete body.team_member;
    }
    const data = await prisma.dealership.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
