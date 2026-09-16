import type { PaginatedRequest } from '../../helpers/PaginatedRequest';
import { ajvQuery } from '../Ajv';

export type GroupsListAllProps = PaginatedRequest<{ roomId?: string }>;

const groupsListAllPropsSchema = {
	type: 'object',
	properties: {
		roomId: {
			type: 'string',
			minLength: 1,
		},
	},
};

export const isGroupsListAllProps = ajvQuery.compile<GroupsListAllProps>(groupsListAllPropsSchema);
