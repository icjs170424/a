import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'; //filesystem


describe('Our first test', () => {
      it('should pass', () => {
            expect(true).to.equal(true);
      })
});

describe('Index.html', () => {
      it('should say users', (done) => {
            const index = fs.readFileSync('./src/index.html', "utf-8");
            jsdom.env(index, function(err, window) {
                  const h1 = window.document.getElementsByTagName('h1')[0];
                  expect(h1.innerHTML).to.equal("Users");
                  done();
                     /*************************
                      * NOTE: done() is required when async requests are involved!!!
                      *
                      */

                  window.close();
            });
      });
});
