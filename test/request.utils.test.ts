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

    it('should have PUT function', () => {
        const request = new RequestUtils('https://test.com');
        expect(request.put).toBeDefined();
    });

    it('should have PATCH function', () => {
        const request = new RequestUtils('https://test.com');
        expect(request.patch).toBeDefined();
    });

    it('should have DELETE function', () => {
        const request = new RequestUtils('https://test.com');
        expect(request.delete).toBeDefined();
    });
});