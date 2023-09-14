function testHostAvailability(host, callback) {
  fetch(host)
    .then(response => {
      if (response.status === 200) {
        callback(true);
      } else {
        callback(false);
      }
    })
    .catch(error => {
      callback(false);
    });
}

// 使用示例
const host1 = 'https://sv-v.magong.site:9000/blog/network-test.html';
const host2 = 'https://minio.magong.site/blog/network-test.html';

testHostAvailability(host1, isHost1Accessible => {
  if (isHost1Accessible) {
    console.log(`可访问的主机是：${host1}`);
    // 在这里执行您的请求操作
  } else {
    console.log(`无法访问 ${host1}，尝试访问 ${host2}`);
    testHostAvailability(host2, isHost2Accessible => {
      if (isHost2Accessible) {
        console.log(`可访问的主机是：${host2}`);
        // 在这里执行您的请求操作
      } else {
        console.log('两台主机都无法访问');
        // 在这里处理两台主机都不可访问的情况
      }
    });
  }
});

async function main() {
    const hasIPv6 = await checkIPv6();
    
    const elements = document.querySelectorAll('.my-server-ipv6');
    
    if (hasIPv6) {
      elements.forEach(el => el.style.display = ''); 
    } else {
      elements.forEach(el => el.style.display = 'none');
    }
  }
  
main();