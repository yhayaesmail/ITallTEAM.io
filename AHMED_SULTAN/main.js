// دي مصفوفة فيها كل المنتجات 
// كل منتج عبارة عن opject فيه:
// -id -name -description -image -price -specs: مصفوفة فيها كل المواصفات 

const productS = [
    {
        id: 1,
        name: "AMD-Ryzen-5-7600X",
        description: "6-core, 12-thread processor with boost clock up to 5.3GHz. Built on the Zen 4 architwcture, ideal for gaming and productivity.",
        image: "image/AMD-Ryzen-5-7600X.jpg",
        price: "$299",
        specs: [
            "Base Clock: 4.7 GHz",
            "Boost Clock: 5.3 GHz",
            "Cores/Threads: 6/12",
            "Socket: AMD5",
            "TDP: 105W",
            "Integrated Graphics: AMD Radeon Graphics",
            "Cache: 32MB L3, 6MB L2"
        ]
    },
    {
        id: 2,
        name: "AMD Ryzen 7 7700X",
        description: "An 8-core processor designed for demanding tasks like 4K gaming and heavy rendering. Built with Zen 4 architecture and PCIe 5.0 support.",
        image: "image/AMD-Ryzen-7-7700X.jpg",
        price: "$399",
        specs: [
            "Base Clock: 4.5 GHz",
            "Boost Clock: Up to 5.4 GHz",
            "Cores/Threads: 6/12",
            "Socket: AMD5",
            "TDP: 105W",
            "Integrated GPU: AMD Radeon Graphics",
            "Cache: 40MB (32MB L3 + 8MB L2)"
        ]
    },
    {
        id: 3,
        name: "AMD Ryzen 9 7900x",
        description: "16-core, 32-thread powerhouse processor ideal for creators and enthusiasts.",
        image: "image/AMD-Ryzen-9-7900x.jpg",
        price: "$500",
        specs: [
            "Base Clock: 4.7 GHz",
            "Base Clock: Up to 5.6 GHz",
            "Cores/Threads: 12/24",
            "Socket: AM5",
            "TDP: 170W",
            "Integrated Graphics: AMD Radeon Graphics",
            "Cache: 76MB Total"
        ]
    },
    {
        id: 4,
        name: "AMD Ryzen 7 7800X3D",
        description: "The AMD Ryzen 7 7800X3D is a cutting-edge gaming processor that features AMD’s 3D V-Cache technology, offering massive cache memory for boosted gaming performance. It's ideal for gamers who want top-tier frame rates and low latency in AAA titles, as well as streamers and competitive players.",
        image: "image/AMD-Ryzen-7-7800X3D.jpg",
        price: "$320",
        specs: [
            "cores: 14(6P + 8E)",
            "Base Clock: 5.1 GHz",
            "Cores/Threads: 6/12",
            "Socket: LGA 1700",
            "TDP: 125W",
            "Graphics: UHD 770",
            "Unlocked: Yes"
        ]
    },
    {
        id: 5,
        name: "AMD Ryzwn 9 7950x",
        description: "The AMD Ryzen 9 7950X is one of the most powerful CPUs in the Ryzen 7000 series, designed for high-end users, content creators, and gamers who demand maximum performance. It Is perfect for multitasking, 3D rendering, software development, and heavy video editing workflows.",
        image: "image/AMD-Ryzwn-9-7950x.jpg",
        price: "$450",
        specs: [
            "Cores: 16",
            "Threads: 32",
            "Base Clock: 4.5GHz",
            "Max Boost Clock: Up to 5.7 GHz",
            "Cache: L2 Cache=16MB L3 Cache=64MB"
        ]
    },
    {
        id: 6,
        name: "ASUS ROG Crosshair X670E",
        description: "Premium gaming motherboard with robust power delivery, PCIe 5.0, and extensive connectivity for AMD Ryzen CPUs",
        image: "image/ASUS-ROG.jpg",
        price: "$499",
        specs: [
            "Chipset: X670E",
            "Expansion: PCIe 5.0",
            "Connectivity: wi-fi 6E, 2.5Gb LAN",
            "Socket: AM5",
            "USB: USB4, Type-C",
            "Memory: DDR5, up to 128GB"
        ]
    },
    {
        id: 7,
        name: "ASRock X670E Taichi",
        description: "Feature-rich motherboard with PCIE 5.0, DDR5, and a premium power design for AM5 CPUs",
        image: "image/asrock-x670e.jpg",
        price: "$299",
        specs: [
            "Chipset: X670E",
            "Memory: DDR5",
            "Slots: PCIe 5.0",
            "Audio: Realtek ALC4082",
            "Network: 2.5GbE, Wi-Fi 6E",
            "USB: Type-C"
        ]
    },
    {
        id: 8,
        name: "ASUS TUF Gaming B650-PLUS",
        description: "Durable and reliable motherboard designed with military-grade components for gaming and longevity.",
        image: "image/asus-tuf.jpg",
        price: "$299",
        specs: [
            "Chipset: B650",
            "Memory: DDR5 up to 6400MHz",
            "Networking:WiFi6,2.5GBE LAN",
            "Socket: AM5",
            "Audio: Realtek 7.1 Channel",
            "Graphics interface: PCIe4.0"
        ]
    },
    {
        id: 9,
        name: "MSI MEG X670E ACE",
        description: "A flagship-level motherboard with 24-phase power, ideal for heavy multitasking and overclocking.",
        image: "image/MSI-MEG.jpg",
        price: "$350",
        specs: [
            "Chipset: X670E",
            "Socket: AM5",
            "Memory: DDR5 up to 6600+ MHz",
            "Audio: realtek ALC4082 + ESS SABRE DAC",
            "Networking: WiFi 6E, 2.5G LAN",
            "Expansion: PCIe 5.0 x16 and M.2"
        ]
    },
    {
        id: 10,
        name: "Gigabyte B650 AORUS Elite AX",
        description: "Affordable AM5 motherboard with solid build quality, PCIe 5.0, DDR5, and wi-fi 6support.",
        image: "image/gigabyte-b650.jpg",
        price: "$370",
        specs: [
            "Chipset: B650",
            "socket:AM5",
            "Memory: DDR5",
            "PCIe: Gen 5 x16",
            "USB: USB 3.2 Gen 2"
        ]
    },


  ]


  document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));
    const product = productS.find((p) => p.id === productId);

    const productContainer = document.getElementById("product-container");
    
    if (product && productContainer) {
        const productHTML = `
        <div class="product-detail-card">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p class="description">${product.description}</p>
        <p class="price">price: ${product.price}</p>
        <ul class="specs">
        ${product.specs.map(spec => `<li>${spec}</li>`).join("")}
        </ul>
        </div>
        `;
        productContainer.innerHTML = productHTML;
    } else if (productContainer) {
     productContainer.innerHTML = "<p>product not found.</p>";
    }
    });



    document.addEventListener("DOMContentLoaded", function () {
        const buyButtons = document.querySelectorAll(".buy");
        const toast = document.getElementById("toast");

        buyButtons.forEach(button => {
            button.addEventListener("click",
                () => {
                    if (toast) {
                        toast.classList.add("show");
                        setTimeout(() => {
                            toast.classList.remove("show");
                        }, 3000);
                    }
                });
        });
    });
