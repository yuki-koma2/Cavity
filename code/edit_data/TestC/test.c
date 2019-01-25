#include <stdio.h>

int main(void) {

  int i,count = 10;

  printf("Hello, World\n");

  for(i=0;i<10;++i) {
    printf("%d\n", i);
  }

  for (i = 0; i < count; i++) {
    //size_t https://cpprefjp.github.io/reference/cstddef/size_t.html
    printf("%d\n", i);
  }
return 0;
}
