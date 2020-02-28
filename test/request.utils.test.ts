import { RequestUtils } from '../src/request.utils';

describe('RequestUtils', () => {
    it('should have GET function', () => {
        const request = new RequestUtils('https://test.com');
        expect(request.get).toBeDefined();
    });

    it('should have POST function', () => {
        const request = new RequestUtils('https://test.com');
        expect(request.post).toBeDefined();
    });
});