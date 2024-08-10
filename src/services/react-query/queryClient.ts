import { QueryClient } from '@tanstack/react-query';

/**
 * ### queryClient
 *
 * react-query의 서비스 객체입니다.
 *
 * 해당 서비스에서 설정한 옵션은 전역적으로 적용됩니다.
 */
const queryClient = new QueryClient();

export default queryClient;
